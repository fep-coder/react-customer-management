import { apiSlice } from "./apiSlice";

const customersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // get /customers
        getCustomers: builder.query({
            query: () => "/customers",
            providesTags: ["Customers"],
        }),
        // get single customer
        getCustomer: builder.query({
            query: (id) => `/customers/${id}`,
            providesTags: ["Customers"],
        }),
        // post /customers
        addCustomer: builder.mutation({
            query: (customer) => ({
                url: "/customers",
                method: "POST",
                body: customer,
            }),
            invalidatesTags: ["Customers"],
        }),
        // update /customers
        updateCustomer: builder.mutation({
            query: (customer) => ({
                url: `/customers/${customer.id}`,
                method: "PUT",
                body: customer,
            }),
            invalidatesTags: ["Customers"],
        }),
    }),
});

export const {
    useGetCustomersQuery,
    useGetCustomerQuery,
    useAddCustomerMutation,
    useUpdateCustomerMutation,
} = customersApiSlice;
