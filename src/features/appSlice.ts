import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
  name: string;
  email: string;
  picture: string;
}
interface User {
  data: UserData;
}

interface AppState {
  isLightTheme: boolean;
  user: User | null;
  lang: "es" | "en";
}
const initialState: AppState = {
  isLightTheme: localStorage.getItem("isLightTheme") === "true" || false,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null,
  lang: (localStorage.getItem("lang") as "es" | "en") || "es",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleLightTheme: (state) => {
      state.isLightTheme = !state.isLightTheme;
      localStorage.setItem("isLightTheme", state.isLightTheme.toString());
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    setLang: (state, action: PayloadAction<"es" | "en">) => {
      state.lang = action.payload;
      localStorage.setItem("lang", state.lang);
    },
  },
});

export const { toggleLightTheme, setUser, setLang } = appSlice.actions;

export default appSlice.reducer;
