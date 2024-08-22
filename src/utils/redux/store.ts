import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { loadingSlice } from "./slice/loadingSlice";
import { burgerMenuSlice } from "./slice/burgerMenuSlice";
import { servicesApi } from "./services/serviceApi";
import { settingsApi } from "./services/settingsApi";
import { settingsSlice } from "./slice/settingsSlice";
import { usersApi } from "./services/usersApi";
import { projectsApi } from "./services/projecsApi";
export const store = configureStore({
    reducer: {
        // add reducers
        loading: loadingSlice.reducer,
        burgerMenu: burgerMenuSlice.reducer,
        settings: settingsSlice.reducer,
        [servicesApi.reducerPath]: servicesApi.reducer,
        [settingsApi.reducerPath]: settingsApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [projectsApi.reducerPath]: projectsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(servicesApi.middleware).concat(settingsApi.middleware).concat(usersApi.middleware).concat(projectsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 