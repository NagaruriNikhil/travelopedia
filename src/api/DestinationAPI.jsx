import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//When an API is created slice is automatically is created in the background
//for every endpoint automatically actionmethods will be created for example getAllDestination
export const destinationAPI = createApi({
  reducerPath: "apidestination",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/" }),
  endpoints: (builder) => ({
    //QUERY -> GET
    //MUTATION -> POST, PUT, DELETE

    getAllDestination: builder.query({
      query: () => "destination",
    }),
  }),
});

//endpointshould be Pascal casing
export const { useGetAllDestinationQuery } = destinationAPI;
