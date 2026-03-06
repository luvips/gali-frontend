import {
  getPopularMovies,
  getTopRatedMovies,
  discoverMovies,
} from "@/lib/api";

export const PAGE_SIZE = 14;
const MULTIPAGE_COUNT = 5;

export type HomeTab = "all" | "popular" | "top";

export async function getHomeGridData(tab: HomeTab, genre: number | null, page: number) {
  if (tab === "all") {
    const pages = Array.from({ length: MULTIPAGE_COUNT }, (_, i) => i + 1);
    const results = await Promise.all(
      pages.map((p) => discoverMovies({ genre: genre ?? undefined, type: "popular", page: p }))
    );
    const allMovies = [
      ...new Map(results.flatMap((r) => r.results).map((m) => [m.id, m])).values(),
    ];
    return {
      movies: allMovies.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
      totalPages: Math.ceil(allMovies.length / PAGE_SIZE),
    };
  }

  const type = tab === "top" ? "top_rated" : "popular";

  if (genre !== null) {
    const data = await discoverMovies({ genre, type, page });
    return {
      movies: data.results.slice(0, PAGE_SIZE),
      totalPages: Math.min(500, data.total_pages),
    };
  }

  const data = tab === "top" ? await getTopRatedMovies(page) : await getPopularMovies(page);
  return {
    movies: data.results.slice(0, PAGE_SIZE),
    totalPages: Math.min(500, data.total_pages),
  };
}
