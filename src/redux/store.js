import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice"
import tweetsReducer from "./tweets/tweetsSlice"

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        tweets: tweetsReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
