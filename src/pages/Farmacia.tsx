import { useTranslation } from "react-i18next";
import PageTitle from "../components/PageTitle";
import { IoIosAddCircleOutline } from "react-icons/io";
import DayElement from "../components/DayElement";
import React, { useState } from "react";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const Farmacia = () => {
  const { t } = useTranslation();
  const days: string[] = Object.values(t("days", { returnObjects: true }));
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [treatment, setTreatment] = useState<string>("");
  const [time, setTime] = useState<string>("10:00");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(selectedDays);
    const { value } = e.target;
    if (selectedDays.includes(value)) {
      setSelectedDays(selectedDays.filter((day) => day !== value));
    } else {
      setSelectedDays([...selectedDays, value]);
    }
  }

  function handleTreatmentChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTreatment(e.target.value);
    console.log(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("submit");
    console.log(selectedDays);
  }

  function handleTimeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTime(e.target.value);
  }

  return (
    <div className="farmacia">
      <PageTitle title={t("farmacia")} />
      <form onSubmit={handleSubmit} className="farmacia-form">
        <h3>agregar tratamiento</h3>
        <div className="farmacia-content">
          <div className="farmacia-inputs">
            <input
              type="text"
              placeholder="ej. ejemplo"
              value={treatment}
              onChange={handleTreatmentChange}
            />
            <input
              type="time"
              name="time"
              id="time"
              value={time}
              onChange={handleTimeChange}
            />
          </div>
          <div className="days-wrapper">
            {days.map((day) => {
              return <DayElement val={day} key={day} handler={handleChange} />;
            })}
          </div>
        </div>
        <button type="submit">
          <IoIosAddCircleOutline />
        </button>
      </form>
      <ul className="farmacia-list">
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
    </div>
  );
};
export default Farmacia;
