import { useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { type Appointment } from "../features/appSlice";
import PageTitle from "../components/PageTitle";

function findAppointment(id: string, appointments: Appointment[]) {
  id = id.slice(4);
  return appointments.find((app) => app.id === id);
}

const CitaDetail = () => {
  const { citaId } = useParams<{ citaId: string }>();
  const { appointments } = useAppSelector((state) => state.app);
  const appointment = findAppointment(citaId!, appointments);
  const {
    doctor: { especialidad, picture, phone, name },
    date: { time, date },
  } = appointment!;

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
        <button>nueva fecha</button>
        <button>Eliminar cita</button>
      </div>
    </div>
  );
};
export default CitaDetail;
