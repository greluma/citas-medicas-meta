import { useTranslation } from "react-i18next";
import programmingImg from "../assets/images/programming.svg";
import PageTitle from "../components/PageTitle";
import { IoIosMail } from "react-icons/io";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <PageTitle title={t("dev")} />
      <img src={programmingImg} alt="programming" />
      <div className="about-info">
        <div className="about-mail">
          <h3>manuel alejandro rodríguez prieto </h3>
          <div className="about-mail-det">
            <span>
              <IoIosMail />
            </span>
            <a href="mailto:greluma2@gmail.com">greluma2@gmail.com</a>
          </div>
        </div>
        <a
          className="cv"
          href="../../public/Manuel Rodriguez Prieto CV - ESP.pdf"
          download
        >
          {t("cv")}
        </a>
      </div>
    </div>
  );
};
export default About;
