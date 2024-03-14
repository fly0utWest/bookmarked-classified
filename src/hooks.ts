import { useState, useEffect, useCallback } from 'react';
import { UseFetchResult, ErrorResponse } from './types';

export function useFetch<T>(
  baseUrl: string,
  endpoint: string = '',
): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    const fullUrl = endpoint ? `${baseUrl}/${endpoint}` : baseUrl;
    const abortController = new AbortController();
    const signal = abortController.signal;

    try {
      const response = await fetch(fullUrl, { signal });

      if (!response.ok) {
        const errorResponse: ErrorResponse = await response.json();
        throw new Error(errorResponse.message || 'HTTP error!');
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error: unknown) {
      if ((error as Error).name !== 'AbortError') {
        setError(
          error instanceof Error
            ? error.message
            : 'An unexpected error has occurred',
        );
      }
    } finally {
      setIsLoading(false);
    }

    return () => {
      abortController.abort();
    };
  }, [baseUrl, endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error };
}
