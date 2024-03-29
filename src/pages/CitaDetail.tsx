import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { cancelAppointment, setAppointmentDate } from '../features/appSlice';
import PageTitle from '../components/PageTitle';
import MainBtn from '../components/MainBtn';
import { findAppointment } from '../utils/findAppointment';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const CitaDetail = () => {
  const { citaId } = useParams<{ citaId: string }>();
  const { appointments } = useAppSelector((state) => state.app);
  const appointment = findAppointment(citaId!, appointments);
  const { t } = useTranslation();

  const [isAnimate, setIsAnimate] = useState<boolean>(false);

  function animate() {
    let cont = 0;
    const interval = setInterval(() => {
      cont++;
      console.log(cont);
      setIsAnimate((prevState) => !prevState);
      console.log(isAnimate);
      if (cont >= 4) {
        clearInterval(interval);
        setIsAnimate(false);
      }
    }, 300);
  }

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    doctor: { especialidad, picture, phone, name },
    date: { time, date },
  } = appointment!;

  function handleCancelAppointment() {
    dispatch(cancelAppointment(citaId!.slice(4)));
    navigate('/citas');
    toast.error(t('citaElim'));
  }

  function handleSetAppointmentDate() {
    dispatch(setAppointmentDate(citaId!.slice(4)));
    animate();
    toast.success(t('citaNewDate'));
  }

  return (
    <div className="cita-detail">
      <div className="cita-detail-title">
        <PageTitle title={t('citaDetail.title')} />
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
        <div className={`cita-detail-date ${isAnimate && 'animation-date'}`}>
          <p>
            {t('citaDetail.time')}: {time}
          </p>
          <p>
            {t('citaDetail.date')}: {date}
          </p>
        </div>
      </div>
      <div className="cita-detail-btns">
        <MainBtn
          title={t('citaDetail.newDate')}
          func={handleSetAppointmentDate}
        />
        <MainBtn
          title={t('citaDetail.cancel')}
          func={handleCancelAppointment}
        />
      </div>
    </div>
  );
};
export default CitaDetail;
