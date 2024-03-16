interface DayElementProps {
  val: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DayElement = ({ val, handler }: DayElementProps) => {
  return (
    <div className="day-element">
      <input
        type="checkbox"
        name={val}
        id={val}
        value={val}
        onChange={handler}
      />
      <label htmlFor={val}>{val.slice(0, 3)}</label>
    </div>
  );
};
export default DayElement;
