import axios, { type AxiosResponse } from "axios";
import type { Movie } from "../types/movie"


const API_URL = "https://api.themoviedb.org/3/search/movie/";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

interface URLResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export async function getMovies(query: string): Promise<Movie[]> {
  try {
    
    const config = {
    params: { query },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  const response: AxiosResponse<URLResponse>= await axios.get(
    API_URL,
    config
  );

  return response.data.results;}
  catch (error) {
    console.error("Помилка при отриманні даних:", error);
  return [];
  }
}