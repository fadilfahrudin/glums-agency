import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { loadingSlice } from "./slice/loadingSlice";
import { burgerMenuSlice } from "./slice/burgerMenuSlice";
export const store = configureStore({
    reducer: {
        // add reducers
        loading: loadingSlice.reducer,
        burgerMenu: burgerMenuSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 