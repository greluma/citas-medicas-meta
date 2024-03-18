import { useTranslation } from "react-i18next";
import PageTitle from "../components/PageTitle";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import React, { useEffect, useState, type ChangeEvent } from "react";
import { addAppointment } from "../features/appSlice";
import { IoIosAddCircleOutline } from "react-icons/io";
import { getRandomAppointment } from "../utils/creacion_citas/getRandomAppointment";
import { formatDate } from "../utils/formatDate";
import { type Doctor } from "../utils/creacion_citas/relacion_doc_esp";
import { MdReadMore } from "react-icons/md";
import { Link } from "react-router-dom";
import { fetchDoctors } from "../utils/fetchDoctors";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const Citas = () => {
  const { t } = useTranslation();
  const { doctors, appointments } = useAppSelector((state) => state.app);
  const [selectedValue, setSelectedValue] = useState<string>("");

  const dispatch = useAppDispatch();
  const noDoc = doctors.length === 0;

  // obtener el primer valor de la lista de doctores para el select
  useEffect(() => {
    setSelectedValue(doctors[0]?.id);
  }, [doctors]);

  // obtener la lista de doctores si no hay ninguno
  useEffect(() => {
    if (noDoc && appointments.length === 0) {
      dispatch(fetchDoctors());
    }
  }, []);

  // handlers
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const specialist = doctors.find((doc: Doctor) => doc.id === selectedValue)!;
    const id = `app_${uuidv4()}`;
    const date = formatDate(getRandomAppointment());
    dispatch(addAppointment({ doctor: specialist, date, id }));
    toast.success(t("citaCreada"));
  }

  return (
    <div className="content-wrapper">
      <PageTitle title={t("citas")} />
      <form className="citas-form" onSubmit={handleSubmit}>
        <h3>{t("newCita")}</h3>
        <div className="select-wrapper">
          <select
            name="especialistas"
            id="especialistas"
            onChange={handleChange}
            disabled={noDoc}
          >
            {noDoc && <option value={""}>{t("noDisp")}</option>}
            {!noDoc &&
              doctors.map((doc) => (
                <option key={doc.id} value={doc.id}>
                  {doc.especialidad}
                </option>
              ))}
          </select>
          <button type="submit" disabled={noDoc}>
            <IoIosAddCircleOutline />
          </button>
        </div>
      </form>
      <div className="citas-resumen">
        <ul>
          {appointments.map((app) => {
            const { doctor, date, id } = app;
            return (
              <li key={id} className="citas-resumen-element">
                <Link to={`/citas/cit_${id}`}>
                  <p>
                    <span>{doctor.especialidad}</span>
                    <span>{date.time}</span>
                    <span>{date.date}</span>
                    <span className="icon">
                      <MdReadMore />
                    </span>
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Citas;
