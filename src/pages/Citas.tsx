import { useTranslation } from "react-i18next";
import PageTitle from "../components/PageTitle";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import React, { useEffect, useState, type ChangeEvent } from "react";
import { addAppointment, fetchDoctors } from "../features/appSlice";
import { IoIosAddCircleOutline } from "react-icons/io";
import { uniqueId } from "lodash-es";
import { getRandomAppointment } from "../utils/creacion_citas/getRandomAppointment";
import { formatDate } from "../utils/formatDate";
import { type Doctor } from "../utils/creacion_citas/relacion_doc_esp";
import { MdReadMore } from "react-icons/md";
import { Link } from "react-router-dom";

const Citas = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { doctors, appointments } = useAppSelector((state) => state.app);

  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const noDoc = doctors.length === 0;

  useEffect(() => {
    setSelectedValue(doctors[0]?.id);
  }, [doctors]);

  useEffect(() => {
    if (noDoc && appointments.length === 0) {
      dispatch(fetchDoctors());
    }
  }, [dispatch, noDoc, appointments.length]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const specialist = doctors.find((doc: Doctor) => doc.id === selectedValue)!;
    const id = uniqueId("app_");
    const date = formatDate(getRandomAppointment());
    dispatch(addAppointment({ doctor: specialist, date, id }));
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
              doctors.map((doc, index) => (
                <option key={doc.id} value={doc.id}>
                  {t(`doctors.${index + 1}`)}
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
