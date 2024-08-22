import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../../config/config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const servicesApi: any = createApi({
    reducerPath: "servicesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (build) => ({
        getServices: build.query({
            query: ({keywords, page, limit}) => `services?keywords=${keywords}&page=${page}&limit=${limit}`,
        }),
        getServiceById: build.query({
            query: (id) => `services/${id}`,
        })
    })
})

export const { useGetServiceByIdQuery, useGetServicesQuery } = servicesApi