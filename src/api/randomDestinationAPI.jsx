import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//When an API is created slice is automatically is created in the background
//for every endpoint automatically actionmethods will be created for example getAllDestination
export const randomDestinationAPI = createApi({
  reducerPath: "apiRandomDestination",
  baseQuery: fetchBaseQuery({ baseUrl: "https://random-data-api.com/api/v2/" }),
  endpoints: (builder) => ({
    getRandomDestination: builder.query({
      query: () => ({ url: "addresses", method: "GET" }),
    }),
  }),
});

//endpointshould be Pascal casing
export const { useGetRandomDestinationQuery } = randomDestinationAPI;
