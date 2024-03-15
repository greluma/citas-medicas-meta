interface MainBtnProps {
  title: string;
  func: () => void;
}

const MainBtn = ({ title, func }: MainBtnProps) => {
  return <button onClick={func}>{title}</button>;
};
export default MainBtn;
