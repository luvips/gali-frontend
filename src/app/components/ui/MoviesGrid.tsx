import MovieCard from "./MovieCard";
import SkeletonCard from "./SkeletonCard";
import { type Movie } from "@/lib/tmdb";

const GRID_CLASS = "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3";

export function MoviesGrid({ movies }: { movies: Movie[] }) {
  return (
    <div className={GRID_CLASS}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export function MoviesGridSkeleton() {
  return (
    <div className={GRID_CLASS}>
      {Array.from({ length: 20 }).map((_, i) => <SkeletonCard key={i} />)}
    </div>
  );
}
