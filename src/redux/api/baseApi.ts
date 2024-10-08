import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://machanical-keyboard-server.vercel.app/api/" }),
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
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: (options) => {
        return {
          url: `/product/${options._id}`,
          method: "PUT",
          body: options,
        };
      },
      invalidatesTags: ["product"],
    }),
    addProduct: builder.mutation({
      query: (options) => {
        console.log("base api =>", options);
        return {
          url: `/product`,
          method: "POST",
          body: options,
        };
      },
      invalidatesTags: ["product"],
    }),

    decreaseProductQuantity: builder.mutation({
      query: ({ id, quantity }) => ({
        url: `/product/${id}/decrease`,
        method: "PATCH",
        body: { quantity },  // Pass the quantity in the request body
      }),
      invalidatesTags: ["product"],
    }),
    
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useAddProductMutation,
  useDecreaseProductQuantityMutation,
} = baseApi;

export default baseApi;
