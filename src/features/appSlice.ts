import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { createDocs, Doctor } from "../utils/creacion_citas/relacion_doc_esp";

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
  doctors: Doctor[] | [];
}

const initialState: AppState = {
  isLightTheme: localStorage.getItem("isLightTheme") === "true" || false,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null,
  lang: (localStorage.getItem("lang") as "es" | "en") || "es",
  doctors: [],
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
    setDoctors: (state, action: PayloadAction<Doctor[]>) => {
      state.doctors = action.payload;
    },
  },
});

export const { toggleLightTheme, setUser, setLang, setDoctors } =
  appSlice.actions;

export const fetchDoctors = () => async (dispatch: Dispatch) => {
  const doctorsData = await createDocs();
  dispatch(setDoctors(doctorsData));
};

export default appSlice.reducer;
