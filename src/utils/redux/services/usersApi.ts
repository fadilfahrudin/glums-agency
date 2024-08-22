import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../../config/config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const usersApi: any = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (build) => ({
        getUsers: build.query({
            query: ({keywords, page, limit}) => `get-data-team?keywords=${keywords}&page=${page}&limit=${limit}`,
        }),
    })
})

export const { useGetUsersQuery } = usersApi