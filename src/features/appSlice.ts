import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import {
  createDocs,
  type Doctor,
} from "../utils/creacion_citas/relacion_doc_esp";

interface UserData {
  name: string;
  email: string;
  picture: string;
}
interface User {
  data: UserData;
}

interface Appointment {
  doctor: Doctor;
  date: string;
  id: string;
}

interface AppState {
  isLightTheme: boolean;
  user: User | null;
  lang: "es" | "en";
  doctors: Doctor[] | [];
  appointments: Appointment[] | [];
}

const initialState: AppState = {
  isLightTheme: localStorage.getItem("isLightTheme") === "true" || false,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null,
  lang: (localStorage.getItem("lang") as "es" | "en") || "es",
  doctors: [],
  appointments: [],
};

/* const NoDoctor: Doctor = {
  id: "no-doc",
  name: "",
  email: "",
  picture: "",
  especialidad: "",
  phone: "",
}; */

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
    addAppointment: (state, action: PayloadAction<Appointment>) => {
      state.appointments = [...state.appointments, action.payload];
      state.doctors = state.doctors.filter(
        (doc) => doc.id !== action.payload.doctor.id
      );
    },
  },
});

export const {
  toggleLightTheme,
  setUser,
  setLang,
  setDoctors,
  addAppointment,
} = appSlice.actions;

export const fetchDoctors = () => async (dispatch: Dispatch) => {
  const doctorsData = await createDocs();
  dispatch(setDoctors(doctorsData));
};

export default appSlice.reducer;
