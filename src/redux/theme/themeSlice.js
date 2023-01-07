import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        themes: ["Light", "Dim", "Dark"],
        selectedTheme: (localStorage.getItem("theme") ? localStorage.getItem("theme") : "Light")
    },
    reducers: {
        changeTheme: (state, action) => {
            state.selectedTheme = action.payload
            const $html = document.querySelector("html")
            $html.className = state.selectedTheme
            localStorage.setItem("theme", action.payload)
        }
    }

})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer