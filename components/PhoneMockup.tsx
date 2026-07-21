"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapScreen } from "./phone-screens/MapScreen";
import { SearchScreen } from "./phone-screens/SearchScreen";
import { RoutingScreen } from "./phone-screens/RoutingScreen";
import { PinDropScreen } from "./phone-screens/PinDropScreen";
import { TelemetryScreen } from "./phone-screens/TelemetryScreen";
import { MultiRouteScreen } from "./phone-screens/MultiRouteScreen";

const screens = [
  { id: "map", label: "Maps", component: MapScreen },
  { id: "search", label: "Search", component: SearchScreen },
  { id: "routing", label: "Routing", component: RoutingScreen },
  { id: "pin", label: "Pin Drop", component: PinDropScreen },
  { id: "multi", label: "Multi-Route", component: MultiRouteScreen },
  { id: "telemetry", label: "Telemetry", component: TelemetryScreen },
];

type PhoneMockupProps = {
  compact?: boolean;
};

const PhoneMockup = ({ compact = false }: PhoneMockupProps) => {
  const [activeScreen, setActiveScreen] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Use slower interval on mobile to avoid feeling too fast on smaller screens
    const isMobile = window.innerWidth < 768;
    const delay = isMobile ? 3850 : 4000;

    intervalRef.current = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, delay);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const ActiveComponent = screens[activeScreen].component;

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Phone Frame */}
      <div className="relative">
        {/* Outer glow */}
        <div className="absolute -inset-4 rounded-[3.5rem] bg-gradient-to-b from-primary/8 to-transparent md:blur-2xl blur-md" />

        <div
          className={`relative rounded-[3rem] p-[3px] phone-shadow ${
            compact ? "h-[600px] w-[320px]" : "h-[660px] w-[320px]"
          }`}
                    // className="relative w-[320px] h-[660px] rounded-[3rem] p-[3px] phone-shadow"

          style={{
            background: "linear-gradient(145deg, hsl(222 20% 18%), hsl(222 25% 6%))",
          }}
        >
          {/* Inner bezel */}
          <div className="w-full h-full rounded-[2.8rem] bg-[hsl(222,35%,4%)] overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-[hsl(222,30%,3%)] rounded-b-2xl z-50 flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[hsl(222,18%,12%)]" />
              <div className="w-12 h-[3px] rounded-full bg-[hsl(222,18%,10%)]" />
            </div>

            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-[44px] z-40 flex items-end justify-between px-8 pb-1">
              <span className="text-[10px] font-semibold text-foreground/70">9:41</span>
              <div className="flex items-center gap-1">
                <SignalIcon />
                <WifiIcon />
                <BatteryIcon />
              </div>
            </div>

            {/* Screen Content */}
            <div className="w-full h-full pt-[44px] pb-[20px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScreen}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full"
                >
                  <ActiveComponent />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] rounded-full bg-foreground/20" />
          </div>
        </div>
      </div>

      {/* Screen Indicators */}
      <div className="flex items-center gap-3">
        {screens.map((screen, i) => (
          <button
            key={screen.id}
            onClick={() => setActiveScreen(i)}
            className="flex flex-col items-center gap-1.5 group"
          >
            <div
              className={`h-1.5 rounded-full transition-all duration-500 ${i === activeScreen
                ? "w-8 bg-primary glow-primary"
                : "w-1.5 bg-muted-foreground/30 group-hover:bg-muted-foreground/50"
                }`}
            />
            <span
              className={`text-[10px] font-medium transition-all duration-300 ${i === activeScreen ? "text-primary" : "text-muted-foreground/40"
                }`}
            >
              {screen.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

const SignalIcon = () => (
  <svg width="14" height="10" viewBox="0 0 14 10" className="fill-foreground/70">
    <rect x="0" y="7" width="2.5" height="3" rx="0.5" />
    <rect x="3.5" y="5" width="2.5" height="5" rx="0.5" />
    <rect x="7" y="2.5" width="2.5" height="7.5" rx="0.5" />
    <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" />
  </svg>
);

const WifiIcon = () => (
  <svg width="13" height="10" viewBox="0 0 13 10" className="fill-foreground/70">
    <path d="M6.5 8.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM6.5 5c1.7 0 3.24.7 4.35 1.82a.5.5 0 01-.71.71A5.12 5.12 0 006.5 6a5.12 5.12 0 00-3.64 1.53.5.5 0 01-.71-.71A6.12 6.12 0 016.5 5zm0-3.5c2.55 0 4.86 1.04 6.53 2.72a.5.5 0 01-.71.71A8.12 8.12 0 006.5 2.5a8.12 8.12 0 00-5.82 2.43.5.5 0 01-.71-.71A9.12 9.12 0 016.5 1.5z" />
  </svg>
);

const BatteryIcon = () => (
  <svg width="22" height="10" viewBox="0 0 22 10" className="fill-foreground/70">
    <rect x="0" y="0.5" width="19" height="9" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
    <rect x="1.5" y="2" width="14" height="6" rx="1" fill="hsl(160, 100%, 45%)" />
    <path d="M20 3.5v3a1.5 1.5 0 000-3z" />
  </svg>
);

export default PhoneMockup;
