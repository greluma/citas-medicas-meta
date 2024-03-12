import { useTranslation } from "react-i18next";
import PageTitle from "../components/PageTitle";

const Citas = () => {
  const { t } = useTranslation();
  return (
    <div>
      <PageTitle title={t("citas")} />
    </div>
  );
};
export default Citas;
