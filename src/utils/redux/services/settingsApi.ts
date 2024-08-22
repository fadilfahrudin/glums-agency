import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../../config/config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const settingsApi: any = createApi({
    reducerPath: "settingsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (build) => ({
        getSettings: build.query({
            query: () => 'settings',
        }),
    })
})

export const { useGetSettingsQuery } = settingsApi