import { useEffect, useState } from "react";

const API_KEY = "3d89a60b";
const API_BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(API_BASE_URL + `s=${query}`, {
          signal: controller.signal,
        });

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies!");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
        setError("");
      } catch (err) {
        console.log(err.message);
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();
    return () => controller.abort;
  }, [query]);

  return { movies, isLoading, error };
}
