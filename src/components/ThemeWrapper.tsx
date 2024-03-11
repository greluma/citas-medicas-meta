interface ThemeWrapperProps {
  children: React.ReactNode;
}

const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const isLightMode = false;
  return <div className={`${isLightMode && "light"}`}>{children}</div>;
};
export default ThemeWrapper;
