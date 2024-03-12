import { useTranslation } from "react-i18next";
import PageTitle from "../components/PageTitle";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect } from "react";
import { fetchDoctors } from "../features/appSlice";

const Citas = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { doctors } = useAppSelector((state) => state.app);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  return (
    <div className="content-wrapper">
      <PageTitle title={t("citas")} />
      <form>
        <h3>solicitar nueva cita</h3>
        <select name="especialistas" id="especialistas">
          {doctors.map((doc) => (
            <option key={doc.id} value={doc.id}>
              {doc.name} - {doc.especialidad}
            </option>
          ))}
        </select>
        <button type="submit">+</button>
      </form>
      <div>
        <h3>resumen de citas</h3>
        <ul>
          <li>cita 1</li>
          <li>cita 2</li>
          <li>cita 3</li>
        </ul>
      </div>
    </div>
  );
};
export default Citas;
