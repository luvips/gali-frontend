const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!apiBaseUrl) {
  throw new Error("Falta NEXT_PUBLIC_API_BASE_URL en .env");
}

export const API_BASE_URL = apiBaseUrl;
