import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  value: number;
  isLightTheme: boolean;
}

const initialState: AppState = {
  value: 0,
  isLightTheme: localStorage.getItem("isLightTheme") === "true" || false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    toggleLightTheme: (state) => {
      state.isLightTheme = !state.isLightTheme;
      localStorage.setItem("isLightTheme", state.isLightTheme.toString());
    },
  },
});

export const { increment, incrementByAmount, toggleLightTheme } =
  appSlice.actions;

export default appSlice.reducer;
