"use client";

import { useState } from "react";

export type AgentStatus = "speaking" | "thinking" | "conflicted" | "listening" | "silent";

export interface Agent {
  id: string;
  name: string;
  surname: string;
  role: string;
  status: AgentStatus;
  trustScore: number;
  lastWords?: string;
  conflictWith?: string;
}

interface AgentRosterProps {
  agents: Agent[];
  selectedAgentId: string | null;
  onSelectAgent: (id: string | null) => void;
}

function SpeakingAnimation() {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: "2px", height: "14px" }}>
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div
          key={i}
          className={`wave-bar-${(i % 7) + 1}`}
          style={{
            width: "2px",
            background: "#00E5FF",
            borderRadius: "1px",
            height: "100%",
          }}
        />
      ))}
    </div>
  )
}

export default function AgentRoster({
  agents,
  selectedAgentId,
  onSelectAgent,
}: AgentRosterProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div
      className="wr-scrollbar"
      style={{
        width: "100%",
        height: "100%",
        background: "#0D1117",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      {agents.map((agent) => {
        const isSelected = selectedAgentId === agent.id;
        const isHovered = hoveredId === agent.id;
        const isSpeaking = agent.status === "speaking";

        return (
          <div
            key={agent.id}
            onClick={() => onSelectAgent(isSelected ? null : agent.id)}
            onMouseEnter={() => setHoveredId(agent.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              padding: "16px 20px",
              borderBottom: "1px solid #1E2D3D",
              background: isSelected ? "rgba(74, 158, 255, 0.1)" : isHovered ? "rgba(255, 255, 255, 0.02)" : "transparent",
              cursor: "pointer",
              transition: "all 200ms ease",
              borderLeft: isSelected ? "2px solid #4A9EFF" : "2px solid transparent",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
              <span
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  letterSpacing: "0.06em",
                  color: isSelected ? "#4A9EFF" : "#E8EDF2",
                  textTransform: "uppercase",
                }}
              >
                {agent.name}
              </span>
              {isSpeaking && <SpeakingAnimation />}
            </div>

            <div
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontWeight: 500,
                fontSize: "10px",
                color: isSelected ? "#4A9EFF" : "#4A5568",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {agent.role}
            </div>
          </div>
        );
      })}
    </div>
  );
}
