import { TMDB_IMAGE_BASE_URL, POSTER_SIZES, BACKDROP_SIZES, PROFILE_SIZES } from "./config";

export function getPosterUrl(
  path: string | null,
  size: keyof typeof POSTER_SIZES = "medium"
): string | null {
  if (!path) return null;
  return `${TMDB_IMAGE_BASE_URL}/${POSTER_SIZES[size]}${path}`;
}

export function getBackdropUrl(
  path: string | null,
  size: keyof typeof BACKDROP_SIZES = "large"
): string | null {
  if (!path) return null;
  return `${TMDB_IMAGE_BASE_URL}/${BACKDROP_SIZES[size]}${path}`;
}

export function getProfileUrl(
  path: string | null,
  size: keyof typeof PROFILE_SIZES = "medium"
): string | null {
  if (!path) return null;
  return `${TMDB_IMAGE_BASE_URL}/${PROFILE_SIZES[size]}${path}`;
}
