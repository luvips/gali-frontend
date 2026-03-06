import { MovieListSchema, type MovieList } from "@/schemas/movie";
import { MovieDetailSchema, type MovieDetail } from "@/schemas/movie-detail";
import { MovieCreditsSchema, type MovieCredits } from "@/schemas/credits";
import { fetchBackend } from "./fetcher";

export async function getPopularMovies(page = 1): Promise<MovieList> {
	const data = await fetchBackend<unknown>(`/movies/popular?page=${page}`);
	return MovieListSchema.parse(data);
}

export async function getTopRatedMovies(page = 1): Promise<MovieList> {
	const data = await fetchBackend<unknown>(`/movies/top-rated?page=${page}`);
	return MovieListSchema.parse(data);
}

export async function getUpcomingMovies(page = 1): Promise<MovieList> {
	const data = await fetchBackend<unknown>(`/movies/upcoming?page=${page}`);
	return MovieListSchema.parse(data);
}

export async function searchMovies(query: string, page = 1): Promise<MovieList> {
	const params = new URLSearchParams({ query, page: String(page) });
	const data = await fetchBackend<unknown>(`/movies/search?${params.toString()}`);
	return MovieListSchema.parse(data);
}

export async function discoverMovies(opts: {
	genre?: number;
	type?: "popular" | "top_rated";
	page?: number;
}): Promise<MovieList> {
	const params = new URLSearchParams();
	params.set("page", String(opts.page ?? 1));
	params.set("type", opts.type ?? "popular");
	if (opts.genre) params.set("genre", String(opts.genre));

	const data = await fetchBackend<unknown>(`/movies/discover?${params.toString()}`);
	return MovieListSchema.parse(data);
}

export async function getMovieDetails(id: number): Promise<MovieDetail> {
	const data = await fetchBackend<unknown>(`/movies/${id}`);
	return MovieDetailSchema.parse(data);
}

export async function getMovieCredits(id: number): Promise<MovieCredits> {
	const data = await fetchBackend<unknown>(`/movies/${id}/credits`);
	return MovieCreditsSchema.parse(data);
}

export async function getSimilarMovies(id: number, page = 1): Promise<MovieList> {
	const data = await fetchBackend<unknown>(`/movies/${id}/similar?page=${page}`);
	return MovieListSchema.parse(data);
}
