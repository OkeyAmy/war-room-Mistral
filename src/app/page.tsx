"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const [crisisDescription, setCrisisDescription] = useState("");
  const [isAssembling, setIsAssembling] = useState(false);
  const router = useRouter();

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    if (!crisisDescription.trim()) return;

    setIsAssembling(true);
    
    // Simulate Act 1: The Briefing Room (30 seconds of magic)
    setTimeout(() => {
      router.push("/war-room");
    }, 4000); // 4 seconds for a tight demo experience
  };

  if (isAssembling) {
    return (
      <div className="war-room-app flex items-center justify-center bg-[#080A0E]">
        <div className="text-center space-y-12 max-w-2xl px-6">
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-blue-500/10 animate-pulse rounded-full" />
            <h2 className="text-5xl font-black tracking-tight cinematic-glow mb-2 uppercase italic">
              Assembling your crisis team...
            </h2>
            <p className="text-blue-500/60 font-mono text-xs tracking-[0.3em] uppercase">
              Initializing Secure Tactical Environment
            </p>
          </div>
          
          <div className="space-y-4 text-left font-mono text-sm border-l-2 border-blue-500/30 pl-8 py-6 bg-blue-500/[0.02]">
            <p className="item-new opacity-0" style={{ animationDelay: '0.4s' }}>
              <span className="text-blue-400">[INTEL]</span> Extracting crisis domain: <span className="text-green-400">ANALYZING...</span>
            </p>
            <p className="item-new opacity-0" style={{ animationDelay: '1.2s' }}>
              <span className="text-blue-400">[INTEL]</span> Generating tactical cast: <span className="text-green-400">SYNCING 6 AGENTS</span>
            </p>
            <p className="item-new opacity-0" style={{ animationDelay: '2.0s' }}>
              <span className="text-blue-400">[INTEL]</span> Formulating opening brief: <span className="text-green-400">COMPLETED</span>
            </p>
            <p className="item-new opacity-0 text-blue-300 italic pt-4" style={{ animationDelay: '2.8s' }}>
              &gt; Establishing secure connection to Sector 7...
            </p>
          </div>

          <div className="flex justify-center space-x-3">
            {[0, 150, 300].map((delay) => (
              <div 
                key={delay}
                className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" 
                style={{ animationDelay: `${delay}ms` }} 
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="war-room-app flex flex-col items-center justify-center p-6 bg-[#080A0E]">
      <div className="max-w-4xl w-full space-y-16 text-center">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic cinematic-glow leading-none">
            Every crisis has a room. <br />
            <span className="text-blue-500">This is yours.</span>
          </h1>
        </div>

        <form onSubmit={handleStart} className="w-full max-w-2xl mx-auto space-y-10">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-b from-blue-600/20 to-transparent rounded-lg blur-lg opacity-25 group-focus-within:opacity-100 transition duration-1000"></div>
            <textarea
              autoFocus
              value={crisisDescription}
              onChange={(e) => setCrisisDescription(e.target.value)}
              placeholder="Describe your crisis. Anything. Real or fictional."
              className="relative w-full bg-[#0D1117]/80 backdrop-blur-sm border border-blue-900/30 rounded-lg p-8 text-2xl font-mono text-blue-100 placeholder:text-blue-900 focus:outline-none focus:border-blue-500/50 min-h-[200px] resize-none transition-all shadow-2xl"
            />
            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-blue-900 uppercase tracking-widest pointer-events-none">
              Terminal Input Active
            </div>
          </div>

          <button
            type="submit"
            disabled={!crisisDescription.trim()}
            className="group relative px-12 py-5 bg-blue-600 hover:bg-blue-500 disabled:opacity-20 disabled:cursor-not-allowed text-white font-black uppercase tracking-[0.3em] italic rounded transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10">Assemble Team</span>
            <div className="absolute inset-0 bg-blue-400 blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>
        </form>
      </div>

      <div className="fixed bottom-12 text-[10px] font-mono text-blue-900/40 tracking-[0.8em] uppercase">
        Secure Strategic Interface // Protocol 09-X
      </div>
    </div>
  );
}
