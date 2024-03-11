interface WrapperInfoProps {
  title: string;
  img: string;
  desc?: string;
  func?: () => void;
  btnText?: string;
}

const WrapperInfo = ({ title, img, desc, func, btnText }: WrapperInfoProps) => {
  return (
    <div className="wrapper-info">
      <div className="wrapper-info-container">
        <h2>{title}</h2>
        <img src={img} alt={title} />
        <p>{desc}</p>
        <button onClick={func}>{btnText}</button>
      </div>
    </div>
  );
};
export default WrapperInfo;
