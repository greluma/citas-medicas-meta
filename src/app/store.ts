import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../features/appSlice";
import { thunk } from "redux-thunk";

export const store = configureStore({
  reducer: {
    app: appSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
