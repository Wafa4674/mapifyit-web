"use client";
import React, {
    createContext,
    useContext,
} from "react";

interface MapContextValue {
    mapReady: boolean;
}

const MapContext = createContext<MapContextValue>({
    mapReady: false,
});

export function MapProvider({ children }: { children: React.ReactNode }) {
    return (
        <MapContext.Provider value={{ mapReady: false }}>
            {children}
        </MapContext.Provider>
    );
}

export const useMapContext = () => useContext(MapContext);
