// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = 'd93edfb1a089ed2c9d223af66995f7d8'
const page = 1

interface PopularMovies {
  page: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  results: Array<any>
  total_pages: number
  total_results: number
}

export const tmbdApi = createApi({
  reducerPath: 'tmbdApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query<PopularMovies, number>({
      query: (page = 1) =>
        `movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`,
    }),
  }),
})

export const { useGetPopularMoviesQuery } = tmbdApi
