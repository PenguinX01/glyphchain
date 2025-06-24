import { useEffect } from "react";

export default function RunicPulse() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes runePulse {
        0% { opacity: 0.2; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
        100% { opacity: 0.2; transform: scale(1); }
      }
      .rune {
        animation: runePulse 2s infinite;
        font-size: 3rem;
        text-align: center;
        margin-top: 1rem;
      }
    `;
    document.head.appendChild(style);
  }, []);
  return <div className="rune">⌖</div>;
}
