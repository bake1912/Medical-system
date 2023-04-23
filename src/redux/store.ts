import { configureStore } from "@reduxjs/toolkit";
import medicalSlice from "./slice/medical-slice";
import { Root } from "react-dom/client";

export const store = configureStore({
    reducer: {
        Medical: medicalSlice.reducer
    }
})
export type RootState = ReturnType<typeof store.getState>