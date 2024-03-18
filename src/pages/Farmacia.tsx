import { useTranslation } from "react-i18next";
import PageTitle from "../components/PageTitle";
import { IoIosAddCircleOutline } from "react-icons/io";
import DayElement from "../components/DayElement";
import React, { useState } from "react";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addTreatment, deleteTreatment } from "../features/appSlice";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const Farmacia = () => {
  const { treatments } = useAppSelector((state) => state.app);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  // local state for the form
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [treatment, setTreatment] = useState<string>("");
  const [time, setTime] = useState<string>("10:00");

  // utility for translate days
  const days: string[] = Object.values(t("days", { returnObjects: true }));

  // handlers
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    if (selectedDays.includes(value)) {
      setSelectedDays(selectedDays.filter((day) => day !== value));
    } else {
      setSelectedDays([...selectedDays, value]);
    }
  }

  function handleTreatmentChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTreatment(e.target.value);
  }

  function handleTimeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTime(e.target.value);
  }

  function deleteTreatmentHandler(e: React.MouseEvent<HTMLButtonElement>) {
    dispatch(deleteTreatment(e.currentTarget.ariaLabel!));
    toast.success(t("toasti.del"));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // validation
    if (selectedDays.length === 0) {
      toast.error(t("toasti.date"));
      return;
    }
    if (!treatment) {
      toast.error(t("toasti.treat"));
      return;
    }

    // create new treatment
    const newTreatment = {
      selectedDays,
      treatment,
      time,
      id: uuidv4(),
    };

    // dispatch
    dispatch(addTreatment(newTreatment));

    // clear form
    setSelectedDays([]);
    setTreatment("");
    setTime("10:00");
    toast.success(t("toasti.add"));
  }

  return (
    <div className="farmacia">
      <PageTitle title={t("farmacia")} />
      <form onSubmit={handleSubmit} className="farmacia-form">
        <h3>{t("addTreat")}</h3>
        <div className="farmacia-content">
          <div className="farmacia-inputs">
            <input
              type="text"
              placeholder={t("writeMeds")}
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
              return (
                <DayElement
                  selectedDays={selectedDays}
                  val={day}
                  key={day}
                  handler={handleChange}
                />
              );
            })}
          </div>
        </div>
        <button type="submit">
          <IoIosAddCircleOutline />
        </button>
      </form>
      <div className="citas-resumen farmacia-list">
        <ul>
          {treatments.map((treat) => {
            const { id, selectedDays, time, treatment } = treat;

            return (
              <li key={id} className="citas-resumen-element">
                <p>
                  <span>{treatment}</span>
                  <span>{time}</span>
                  <span className="days-span">
                    {selectedDays.map((day: string, index) => {
                      return `${day.slice(0, 3)}${
                        index === selectedDays.length - 1 ? "" : ","
                      } `;
                    })}
                  </span>
                  <button
                    className="icon"
                    aria-label={id}
                    onClick={deleteTreatmentHandler}
                  >
                    <MdDeleteOutline />
                  </button>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Farmacia;
