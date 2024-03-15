import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  cancelAppointment,
  setAppointmentDate,
  type Appointment,
} from "../features/appSlice";
import PageTitle from "../components/PageTitle";
import MainBtn from "../components/MainBtn";

function findAppointment(id: string, appointments: Appointment[]) {
  id = id.slice(4);
  return appointments.find((app) => app.id === id);
}

const CitaDetail = () => {
  const { citaId } = useParams<{ citaId: string }>();
  const { appointments } = useAppSelector((state) => state.app);
  const appointment = findAppointment(citaId!, appointments);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    doctor: { especialidad, picture, phone, name },
    date: { time, date },
  } = appointment!;

  function handleCancelAppointment() {
    dispatch(cancelAppointment(citaId!.slice(4)));
    navigate("/citas");
  }
  function handleSetAppointmentDate() {
    dispatch(setAppointmentDate(citaId!.slice(4)));
  }

  return (
    <div className="cita-detail">
      <div className="cita-detail-title">
        <PageTitle title="Detalles de la Cita" />
      </div>
      <div className="cita-detail-info">
        <h3>{especialidad}</h3>
        <div className="cita-detail-doc">
          <img src={picture} alt={name} />
          <div className="cita-detail-doc-data">
            <p>Dr. {name}</p>
            <p>{phone}</p>
          </div>
        </div>
        <div className="cita-detail-date">
          <p>hora: {time}</p>
          <p>fecha: {date}</p>
        </div>
      </div>
      <div className="cita-detail-btns">
        <MainBtn title="Nueva Fecha" func={handleSetAppointmentDate} />
        <MainBtn title="Cancelar Cita" func={handleCancelAppointment} />
      </div>
    </div>
  );
};
export default CitaDetail;
