import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}
const useGenre = () => {
  const [genre, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    setLoading(true);
    apiClient
      .get<FetchGenreResponse>("/genres")
      .then((res) => {
        if (mounted) {
          setGenres(res.data.results);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  return { genre, error, isLoading };
};

export default useGenre;
