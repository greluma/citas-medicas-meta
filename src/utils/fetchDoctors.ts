import { setDoctors } from "../features/appSlice";
import { type Dispatch } from "@reduxjs/toolkit";
import { createDocs } from "./creacion_citas/relacion_doc_esp";

// funcionalidad para recrear el fetch de datos doctores desde el servidor
export const fetchDoctors = () => async (dispatch: Dispatch) => {
  const doctorsData = await createDocs();
  dispatch(setDoctors(doctorsData));
};
