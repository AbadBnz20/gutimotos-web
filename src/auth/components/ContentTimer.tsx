import { useEffect, useState } from "react";

const TOTAL = 10 * 60;

function format(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
export const ContentTimer = () => {
  const [remaining, setRemaining] = useState(TOTAL);

  useEffect(() => {
    if (remaining <= 0) return;
    const interval = setInterval(() => {
      setRemaining((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [remaining]);

  const isDanger = remaining <= 30;
  const isWarning = remaining <= 60 && remaining > 30;
//   const color = isDanger ? "#A32D2D" : isWarning ? "#BA7517" : "#6b7280";
  return (
    <span
      className={`text-sm font-mono ${isDanger ? "text-red-700" : isWarning ? "text-yellow-700" : "text-gray-500"}`}
    >
      {remaining === 0
        ? "Código expirado"
        : `${format(remaining)}`}
    </span>
  );
};
