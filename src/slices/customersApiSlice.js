import { apiSlice } from "./apiSlice";

const customersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // get /customers
        getCustomers: builder.query({
            query: () => "/customers",
        }),

        // post /customers
        addCustomer: builder.mutation({
            query: (customer) => ({
                url: "/customers",
                method: "POST",
                body: customer,
            }),
        }),
    }),
});

export const { useGetCustomersQuery, useAddCustomerMutation } =
    customersApiSlice;
