import { useEffect, useState } from "react";
import apiClient from "../services/api-client";



interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint:string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint)
      .then((res) => {
        if (mounted) {
          setData(res.data.results);
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

  return { data, error, isLoading };
};

export default useData;
