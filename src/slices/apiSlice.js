import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:3000",
});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ["Customers"],
    endpoints: () => ({}),
    // keepUnusedDataFor: 5,
    // refetchOnMountOrArgChange: true,
});
