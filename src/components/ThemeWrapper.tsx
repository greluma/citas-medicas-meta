import { useAppSelector } from "../app/hooks";
interface ThemeWrapperProps {
  children: React.ReactNode;
}

const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const isLightMode = useAppSelector((state) => state.app.isLightTheme);

  return <div className={`${isLightMode && "light"}`}>{children}</div>;
};
export default ThemeWrapper;
