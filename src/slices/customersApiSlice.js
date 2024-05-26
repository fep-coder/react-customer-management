import { apiSlice } from "./apiSlice";

const customersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // get /customers
        getCustomers: builder.query({
            query: () => "/customers",
        }),
    }),
});

export const { useGetCustomersQuery } = customersApiSlice;
