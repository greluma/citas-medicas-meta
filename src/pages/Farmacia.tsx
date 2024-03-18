import { useTranslation } from "react-i18next";
import PageTitle from "../components/PageTitle";
import { IoIosAddCircleOutline } from "react-icons/io";
import DayElement from "../components/DayElement";
import React, { useState } from "react";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { uniqueId } from "lodash-es";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addTreatment, deleteTreatment } from "../features/appSlice";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

const Farmacia = () => {
  const { t } = useTranslation();
  const days: string[] = Object.values(t("days", { returnObjects: true }));
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [treatment, setTreatment] = useState<string>("");
  const [time, setTime] = useState<string>("10:00");
  const dispatch = useAppDispatch();
  const { treatments } = useAppSelector((state) => state.app);

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

  function deleteTreatmentHandler(e: React.MouseEvent<HTMLButtonElement>) {
    dispatch(deleteTreatment(e.currentTarget.ariaLabel!));
    toast.success(t("toasti.del"));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (selectedDays.length === 0) {
      toast.error(t("toasti.date"));
      return;
    }
    if (!treatment) {
      toast.error(t("toasti.treat"));
      return;
    }
    const newTreatment = {
      selectedDays,
      treatment,
      time,
      id: uniqueId(),
    };

    dispatch(addTreatment(newTreatment));
    setSelectedDays([]);
    setTreatment("");
    setTime("10:00");
    toast.success(t("toasti.add"));
  }

  function handleTimeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTime(e.target.value);
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
