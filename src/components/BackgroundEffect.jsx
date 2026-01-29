import { useEffect, useState } from "react";

const BackgroundEffect = () => {
  // Simple fake logs for the "Ghost Terminal"
  const [logs, setLogs] = useState([
    "> System initialized...",
    "> Connecting to DevTinder Network...",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = `> Scanning node_${Math.floor(Math.random() * 9999)}...`;
      setLogs((prev) => [...prev.slice(-4), newLog]); // Keep last 5 lines
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 1. ENGINEERING GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#58A6FF 1px, transparent 1px), linear-gradient(90deg, #58A6FF 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* 2. LEFT SIDE: GHOST TERMINAL (Hidden on Mobile) */}
      <div className="hidden xl:block absolute left-50 top-1/3 w-64 text-left font-mono text-xs text-[#58A6FF] opacity-30 select-none">
        <div className="border-b border-[#58A6FF]/30 pb-2 mb-2">
          NETWORK_LOGS
        </div>
        {logs.map((log, i) => (
          <p key={i} className="mb-1">
            {log}
          </p>
        ))}
        <span className="animate-pulse">_</span>
      </div>

      {/* 3. RIGHT SIDE: PULSING RADAR (Hidden on Mobile) */}
      <div className="hidden xl:block absolute right-50 top-1/3 opacity-20 select-none">
        <div className="relative flex justify-center items-center">
          {/* Outer Ring */}
          <div className="absolute w-64 h-64 border border-[#7EE787] rounded-full animate-[ping_3s_linear_infinite]"></div>
          {/* Middle Ring */}
          <div className="absolute w-48 h-48 border border-[#7EE787] rounded-full"></div>
          {/* Inner Ring */}
          <div className="w-32 h-32 border border-[#7EE787] rounded-full flex justify-center items-center">
            <span className="text-[#7EE787] text-[10px] tracking-widest animate-pulse">
              SEARCHING
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundEffect;
