import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { OnePeople } from './types'

export const starWarsAPI = createApi({
  reducerPath: 'starWarsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (x) => ({
    getOnePeopleByID: x.query<OnePeople, string>({
      query: (id) => `people/${id}`,
    }),
  }),
})

export const { useGetOnePeopleByIDQuery } = starWarsAPI