import { useState, useEffect } from 'react';

export function useFetch<T>(fetchFn: () => Promise<T>): [T | null, boolean, Error | null] {
  const [response, setResponse] = useState<T | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetchFn();
        setResponse(res);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [fetchFn]);

  return [response, isLoading, error];
}
