import { useTranslation } from "react-i18next";
import PageTitle from "../components/PageTitle";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect } from "react";
import { fetchDoctors } from "../features/appSlice";
import { IoIosAddCircleOutline } from "react-icons/io";

const Citas = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { doctors } = useAppSelector((state) => state.app);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("cita solicitada");
  }

  return (
    <div className="content-wrapper">
      <PageTitle title={t("citas")} />
      <form className="citas-form" onSubmit={handleSubmit}>
        <h3>solicitar nueva cita</h3>
        <div className="select-wrapper">
          <select name="especialistas" id="especialistas">
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
          <li>cita 1</li>
          <li>cita 2</li>
          <li>cita 3</li>
          <li>cita 1</li>
        </ul>
      </div>
    </div>
  );
};
export default Citas;
