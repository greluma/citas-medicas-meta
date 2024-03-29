import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { orgDates } from "../utils/orgDates";
import { type Doctor } from "../utils/creacion_citas/relacion_doc_esp";
import { getRandomAppointment } from "../utils/creacion_citas/getRandomAppointment";
import { formatDate } from "../utils/formatDate";
import { getLocalStorage } from "../utils/getLocalStorage";

interface UserData {
  name: string;
  email: string;
  picture: string;
}
interface User {
  data: UserData;
}

interface Date {
  date: string;
  time: string;
  getTime: number;
}

export interface Appointment {
  doctor: Doctor;
  date: Date;
  id: string;
}

interface Treatment {
  selectedDays: string[];
  treatment: string;
  time: string;
  id: string;
}
interface AppState {
  isLightTheme: boolean;
  user: User | null;
  lang: "es" | "en";
  doctors: Doctor[] | [];
  appointments: Appointment[] | [];
  treatments: Treatment[] | [];
}

const initialState: AppState = {
  isLightTheme: localStorage.getItem("isLightTheme") === "true" || false,
  lang: (localStorage.getItem("lang") as "es" | "en") || "es",
  doctors: getLocalStorage<Doctor[]>("doctors"),
  appointments: getLocalStorage<Appointment[]>("appointments"),
  treatments: getLocalStorage<Treatment[]>("treatments"),
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null,
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
      localStorage.setItem("doctors", JSON.stringify(state.doctors));
    },
    addAppointment: (state, action: PayloadAction<Appointment>) => {
      state.appointments = [...state.appointments, action.payload];
      state.appointments = orgDates(state.appointments);
      state.doctors = state.doctors.filter(
        (doc) => doc.id !== action.payload.doctor.id
      );
      localStorage.setItem("appointments", JSON.stringify(state.appointments));
      localStorage.setItem("doctors", JSON.stringify(state.doctors));
    },
    cancelAppointment: (state, action: PayloadAction<string>) => {
      const appointment = state.appointments.find(
        (app) => app.id === action.payload
      );
      state.appointments = state.appointments.filter(
        (app) => app.id !== action.payload
      );
      state.doctors = [...state.doctors, appointment!.doctor].sort((a, b) =>
        a.especialidad.localeCompare(b.especialidad)
      );
      localStorage.setItem("doctors", JSON.stringify(state.doctors));

      localStorage.setItem("appointments", JSON.stringify(state.appointments));
    },
    setAppointmentDate: (state, action: PayloadAction<string>) => {
      const appointment = state.appointments.find(
        (app) => app.id === action.payload
      );
      appointment!.date = formatDate(
        getRandomAppointment(appointment!.date.getTime)
      );
      state.appointments = orgDates(state.appointments);
      localStorage.setItem("appointments", JSON.stringify(state.appointments));
    },
    addTreatment: (state, action: PayloadAction<Treatment>) => {
      state.treatments = [...state.treatments, action.payload];
      localStorage.setItem("treatments", JSON.stringify(state.treatments));
    },
    deleteTreatment: (state, action: PayloadAction<string>) => {
      state.treatments = state.treatments.filter(
        (treatment) => treatment.id !== action.payload
      );
      localStorage.setItem("treatments", JSON.stringify(state.treatments));
    },
  },
});

export const {
  toggleLightTheme,
  setUser,
  setLang,
  setDoctors,
  addAppointment,
  cancelAppointment,
  setAppointmentDate,
  addTreatment,
  deleteTreatment,
} = appSlice.actions;

export default appSlice.reducer;
