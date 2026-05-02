"use client";
import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

// ─── Mapifyit Config ────────────────────────────────────────────────────────
const MAPIFYIT_STYLE_URL = "https://client.mapifyit.com/api/v1/proxy/tiles/dark";
const MAPIFYIT_TOKEN = "mfy_8b0755c081c9204caa20681ddab91d2856c3667a6ad8d9e8";
// const DUBAI_LNG = 55.2608;
// const DUBAI_LAT = 25.184;

const DUBAI_LNG = -95.535323;
const DUBAI_LAT = 29.684545;

/**
 * Kick off the maplibre-gl download at module evaluation time (as early as
 * possible – before React mounts or any useEffect runs). By the time the
 * MapProvider's useEffect fires, the JS bundle is already downloaded/parsed
 * and this promise resolves instantly or near-instantly.
 */
const maplibrePromise = import("maplibre-gl");

interface MapContextValue {
    /** True once tiles have fully loaded into the offscreen container */
    mapReady: boolean;
    /**
     * Move the already-rendered map DOM node into `slot` and call resize().
     * Call this when ContactUs mounts.
     */
    attachMapTo: (slot: HTMLDivElement) => void;
    /**
     * Return the map DOM node back to the offscreen parking div.
     * Call this when ContactUs unmounts.
     */
    detachMap: () => void;
}

const MapContext = createContext<MapContextValue>({
    mapReady: false,
    attachMapTo: () => { },
    detachMap: () => { },
});

export function MapProvider({ children }: { children: React.ReactNode }) {
    // "Parking lot" – the fixed offscreen wrapper kept in the DOM permanently
    const parkingRef = useRef<HTMLDivElement>(null);
    // The actual div that MapLibre renders its canvas into
    const containerDivRef = useRef<HTMLDivElement | null>(null);
    // The MapLibre Map instance
    const mapRef = useRef<any>(null);
    const initStarted = useRef(false);
    // Stores the slot if ContactUs mounts before the async import finishes
    const pendingSlotRef = useRef<HTMLDivElement | null>(null);
    const [mapReady, setMapReady] = useState(false);

    useEffect(() => {
        if (initStarted.current || !parkingRef.current) return;
        initStarted.current = true;

        let isMounted = true;

        async function initMap() {
            // Secure Warm-Boot: Fetch the style JSON with token immediately.
            // This pre-warms the browser cache so MapLibre's later request is local/instant.
            fetch(MAPIFYIT_STYLE_URL, {
                headers: { Authorization: `Bearer ${MAPIFYIT_TOKEN}` }
            }).catch(() => { /* silent fail, MapLibre will retry */ });

            // Await the module-level promise — already in-flight since module load.
            const maplibregl = (await maplibrePromise).default;
            if (!isMounted || !parkingRef.current) return;

            // Create the real container inside the parking div
            const el = document.createElement("div");
            el.style.width = "100%";
            el.style.height = "100%";
            parkingRef.current.appendChild(el);
            containerDivRef.current = el;

            // If ContactUs already called attachMapTo while we were loading,
            // honour that pending request now that the container exists.
            if (pendingSlotRef.current) {
                el.style.width = "100%";
                el.style.height = "100%";
                pendingSlotRef.current.appendChild(el);
                pendingSlotRef.current = null;
            }

            const map = new maplibregl.Map({
                container: el,
                style: MAPIFYIT_STYLE_URL,
                center: [DUBAI_LNG, DUBAI_LAT],
                zoom: 14,
                pitch: 45,
                attributionControl: false,
                transformRequest: (url: string) => {
                    // Send token to our proxy (production or local)
                    if (url.includes("mapifyit.com") || url.includes("localhost")) {
                        return {
                            url,
                            headers: { Authorization: `Bearer ${MAPIFYIT_TOKEN}` },
                        };
                    }
                    return { url };
                },
            });

            // Reveal the canvas as soon as the style JSON is parsed — tiles will
            // stream in progressively on the visible canvas. This fires much sooner
            // than 'load' (which blocks until ALL tiles are downloaded).
            map.once("styledata", () => {
                if (!isMounted) return;
                setMapReady(true);
            });

            // Add the marker once tiles are fully loaded (safe to do so then).
            map.once("load", () => {
                if (!isMounted) return;
                new maplibregl.Marker({ color: "#22D3EE" })
                    .setLngLat([DUBAI_LNG, DUBAI_LAT])
                    .addTo(map);
            });

            mapRef.current = map;
        }

        initMap().catch((e) => console.error("[MapProvider] init failed:", e));

        return () => {
            isMounted = false;
        };
    }, []);

    /** Relocate the pre-rendered container node into the ContactUs slot */
    const attachMapTo = useCallback((slot: HTMLDivElement) => {
        const el = containerDivRef.current;

        if (!el) {
            // Container not ready yet (still loading maplibre-gl).
            // Store the slot — initMap() will attach once the container exists.
            pendingSlotRef.current = slot;
            return;
        }

        // Stretch to fill the slot
        el.style.width = "100%";
        el.style.height = "100%";

        slot.appendChild(el);

        // Tell MapLibre to repaint at its new size
        requestAnimationFrame(() => mapRef.current?.resize());
    }, []);

    /** Return the map node to the offscreen parking div */
    const detachMap = useCallback(() => {
        const el = containerDivRef.current;
        const parking = parkingRef.current;
        if (!el || !parking) return;
        parking.appendChild(el);
    }, []);

    return (
        <MapContext.Provider value={{ mapReady, attachMapTo, detachMap }}>
            {/*
             * Offscreen "parking lot" – always present in the DOM.
             * MapLibre renders here while the user is on any other page.
             * Non-zero dimensions are required so tiles actually load.
             */}
            <div
                ref={parkingRef}
                aria-hidden="true"
                style={{
                    position: "fixed",
                    left: "-99999px",
                    top: 0,
                    width: "800px",
                    height: "400px",
                    pointerEvents: "none",
                    zIndex: -9999,
                    // NOTE: Do NOT use visibility:hidden — it cascades down and
                    // hides the canvas even after we move the container into ContactUs.
                    opacity: 0,
                }}
            />
            {children}
        </MapContext.Provider>
    );
}

export const useMapContext = () => useContext(MapContext);
