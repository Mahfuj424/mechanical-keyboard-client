import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (query) => {
        const { minPrice, maxPrice, sortBy, searchTerm } = query;
        const params = new URLSearchParams();

        if (minPrice !== undefined) {
          params.append("minPrice", minPrice.toString());
        }

        if (maxPrice !== undefined) {
          params.append("maxPrice", maxPrice.toString());
        }

        if (sortBy) {
          params.append("sortBy", sortBy);
        }

        if (searchTerm) {
          params.append("searchTerm", searchTerm);
        }

        return {
          url: "/product",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["product"],
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = baseApi;

export default baseApi;
