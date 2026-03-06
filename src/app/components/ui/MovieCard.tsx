import Image from "next/image";
import Link from "next/link";
import { type Movie, getPosterUrl } from "@/lib/movies";

function ScoreBadge({ score }: { score: number }) {
  const pct = Math.round(score * 10);
  const bg = pct >= 70 ? "#22c55e" : pct >= 40 ? "#f59e0b" : "#ef4444";
  return (
    <div
      className="score-badge"
      style={{
        width: 40,
        height: 40,
        minWidth: 40,
        background: bg,
        border: "2.5px solid #000",
        color: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
        fontWeight: 900,
      }}
    >
      {pct}
    </div>
  );
}

function StarRating({ score }: { score: number }) {
  const stars = Math.round(score / 2);
  return (
    <div className="flex gap-0.5 mt-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} style={{ color: i <= stars ? "#f59e0b" : "#d1d5db", fontSize: "13px" }}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function MovieCard({ movie }: { movie: Movie }) {
  const posterUrl = getPosterUrl(movie.poster_path, "medium");

  return (
    <Link href={`/movie/${movie.id}`} className="group block">
      {/* Poster */}
      <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: "2/3" }}>
        {posterUrl ? (
          <Image
            src={posterUrl}
            alt={movie.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
          />
        ) : (
          <div
            className="flex h-full items-center justify-center text-xs font-bold"
            style={{ background: "#f0f0f0", color: "#999" }}
          >
            SIN IMAGEN
          </div>
        )}
      </div>

      {/* Info below poster */}
      <div className="pt-2 pb-1 flex gap-2 items-start">
        <ScoreBadge score={movie.vote_average} />
        <div className="min-w-0 flex-1">
          <div className="flex justify-between items-start gap-1">
            <p className="text-sm font-bold text-black line-clamp-2 leading-tight group-hover:underline">
              {movie.title}
            </p>
            <span className="text-xs font-medium flex-shrink-0 mt-0.5" style={{ color: "#aaa" }}>
              {movie.release_date?.substring(0, 4)}
            </span>
          </div>
          <StarRating score={movie.vote_average} />
        </div>
      </div>
    </Link>
  );
}
