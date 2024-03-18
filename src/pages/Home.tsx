import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { IoIosArrowForward } from "react-icons/io";
import PageTitle from "../components/PageTitle";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const { appointments, treatments } = useAppSelector((state) => state.app);

  return (
    <div className="home">
      <div className="home-title">
        <PageTitle title={t("home")} />
      </div>
      <div className="home-wrapper">
        <div className="home-citas">
          <div className="home-citas-title">
            <h2>{`${t("homePage.resCitas")} (${appointments.length})`} </h2>
            <Link to={"citas"}>
              <IoIosArrowForward />
            </Link>
          </div>
          <div className="home-citas-content">
            <div className="home-citas-add">
              <Link to={"/citas"}>
                <IoIosAddCircleOutline />
              </Link>
              <h3>{t("homePage.addNew")}</h3>
            </div>
            <div className="home-citas-next">
              <h3>{t("homePage.nextCita")}</h3>
              {appointments.length ? (
                <>
                  <h3 className="esp">{appointments[0].doctor.especialidad}</h3>
                  <p>{`${appointments[0].date.time} - ${appointments[0].date.date}`}</p>
                </>
              ) : (
                <p>{t("homePage.noCitas")}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="home-wrapper">
        <div className="home-citas">
          <div className="home-citas-title">
            <h2>{`${t("homePage.resFarm")} (${treatments.length})`} </h2>
            <Link to={"/farmacia"}>
              <IoIosArrowForward />
            </Link>
          </div>

          <ul className="home-pills-content">
            {treatments.length ? (
              treatments.map((treatment) => (
                <li key={treatment.id}>
                  <p>
                    <span>{treatment.treatment}</span>
                    <span>{treatment.time}</span>
                    <span>
                      {treatment.selectedDays.map((day: string, index) => {
                        return `${day.slice(0, 3)}${
                          index === treatment.selectedDays.length - 1 ? "" : ","
                        } `;
                      })}
                    </span>
                  </p>
                </li>
              ))
            ) : (
              <li>{t("homePage.noFarm")}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
