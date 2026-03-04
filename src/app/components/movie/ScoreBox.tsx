export default function ScoreBox({ score }: { score: number }) {
  const pct = Math.round(score * 10);
  const bg = pct >= 70 ? "#22c55e" : pct >= 40 ? "#ffbd3f" : "#ef4444";
  const text = pct >= 40 && pct < 70 ? "#000" : "#fff";
  return (
    <div
      className="flex flex-col items-center justify-center w-20 h-20 font-black text-3xl"
      style={{ background: bg, color: text }}
    >
      {pct}
      <span className="text-xs font-black tracking-widest mt-0.5" style={{ color: text, opacity: 0.8 }}>
        SCORE
      </span>
    </div>
  );
}
