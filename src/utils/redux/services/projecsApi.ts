import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../../config/config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const projectsApi: any = createApi({
    reducerPath: "projectsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (build) => ({
        getProjects: build.query({
            query: ({keywords, page, limit}) => `projects?keywords=${keywords}&page=${page}&limit=${limit}`,
        }),
        getProjectById: build.query({
            query: (id) => `project/${id}`,
        }),
        getProjectByServiceId: build.query({
            query: (id) => `projects/${id}`,
        })
    })
})

export const { useGetProjectsQuery, useGetProjectByServiceIdQuery, useGetProjectByIdQuery } = projectsApi