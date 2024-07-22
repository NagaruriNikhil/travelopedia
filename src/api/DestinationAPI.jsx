import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//When an API is created slice is automatically is created in the background
//for every endpoint automatically actionmethods will be created for example getAllDestination
export const destinationAPI = createApi({
  reducerPath: "apidestination",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/" }),
  tagTypes: ["Destinations"],
  endpoints: (builder) => ({
    //QUERY -> GET
    //MUTATION -> POST, PUT, DELETE
    // Tags will help you to re run the api by invalidating the API calls using tags belwo
    getAllDestination: builder.query({
      query: () => "destination",
      transformResponse: (res) => res.sort((a, b) => b.id - a.id),
      providesTags: ["Destinations"],
    }),

    // this is to differentiate the tags if we use same tags in different api calls
    // getAllDestination: builder.query({
    //   query: (id) => `destination/${id}`,
    //   providesTags: (id) => {
    //     return [{ type: "Destinations", id: id }];
    //   },
    // }),
    addDestination: builder.mutation({
      query: (destination) => ({
        url: "destination",
        method: "POST",
        body: destination,
      }),
      invalidatesTags: ["Destinations"],
    }),
    updateDestination: builder.mutation({
      query: (destination) => ({
        url: `destination/${destination.id}`,
        method: "PUT",
        body: destination,
      }),
      invalidatesTags: ["Destinations"],
    }),
    deleteDestination: builder.mutation({
      query: ({ id }) => ({
        url: `destination/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Destinations"],
    }),
  }),
});

//endpointshould be Pascal casing
export const {
  useGetAllDestinationQuery,
  useAddDestinationMutation,
  useDeleteDestinationMutation,
  useUpdateDestinationMutation,
} = destinationAPI;
