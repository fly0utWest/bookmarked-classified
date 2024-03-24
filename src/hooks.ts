import { useState, useEffect, useCallback } from 'react';
import { UseFetchResult, ErrorResponse } from './types';

export function useFetch<T>(
  baseUrl: string,
  endpoint: string = '',
): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    // abortControllerRef.current?.abort();
    // abortControllerRef.current = new AbortController();

    const fetchData = async () => {
      const fullUrl = endpoint ? `${baseUrl}/${endpoint}` : baseUrl;
      try {
        const response = await fetch(fullUrl, {
          // signal: abortControllerRef.current?.signal,
        });

        if (!response.ok) {
          const errorResponse: ErrorResponse = await response.json();
          throw new Error(errorResponse.message || 'HTTP error!');
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error: unknown) {
          setError(
            error instanceof Error
              ? error.message
              : 'An unexpected error has occurred',
          );
        } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, isLoading, error };
}
