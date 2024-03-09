import { FilmData } from './types';
import { ErrorResponse } from './types';
import { User } from './types';

export async function fetchFilms(baseUrl: string): Promise<FilmData[]> {
return dataFetcher<FilmData[]>(baseUrl);
}

export async function fetchFilm(baseUrl: string): Promise<FilmData> {
  return dataFetcher<FilmData>(baseUrl);
}

export async function fetchUser(baseUrl: string): Promise<User> {
  return dataFetcher<User>(baseUrl); 
}

export async function dataFetcher<T>(baseUrl: string): Promise<T> {
  try {
    const response = await fetch(baseUrl);

    if (!response.ok) {
      // Attempt to parse error response, then throw an error
      const errorResponse: ErrorResponse = await response.json();
      throw new Error(errorResponse.message || 'HTTP error!');
    }

    const json: T = await response.json();
    return json;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Fetching error: ${error.message}`);
    } else {
      throw new Error('An unexpected error has occurred');
    }
  }
}
