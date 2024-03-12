import { useTranslation } from "react-i18next";
import PageTitle from "../components/PageTitle";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import React, { useEffect, useState, type ChangeEvent } from "react";
import { addAppointment, fetchDoctors } from "../features/appSlice";
import { IoIosAddCircleOutline } from "react-icons/io";
import { uniqueId } from "lodash-es";
import { getRandomAppointment } from "../utils/creacion_citas/getRandomAppointment";
import { formatDate } from "../utils/formatDate";

const Citas = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { doctors, appointments } = useAppSelector((state) => state.app);
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    setSelectedValue(doctors[0]?.id);
  }, [doctors]);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const specialist = doctors.find((doc) => doc.id === selectedValue)!;
    const id = uniqueId("app_");
    const date = formatDate(getRandomAppointment());
    dispatch(addAppointment({ doctor: specialist, date, id }));
    // console.log(specialist);
    // console.log(id);
    // console.log(date);
  }

  return (
    <div className="content-wrapper">
      <PageTitle title={t("citas")} />
      <form className="citas-form" onSubmit={handleSubmit}>
        <h3>solicitar nueva cita</h3>
        <div className="select-wrapper">
          <select
            name="especialistas"
            id="especialistas"
            onChange={handleChange}
          >
            {doctors.map((doc) => (
              <option key={doc.id} value={doc.id}>
                {doc.especialidad}
              </option>
            ))}
          </select>
          <button type="submit">
            <IoIosAddCircleOutline />
          </button>
        </div>
      </form>
      <div className="citas-resumen">
        <ul>
          {appointments.map((app) => (
            <li key={app.date}>
              {app.doctor.especialidad} - {app.doctor.name} - {app.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Citas;
