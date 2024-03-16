interface DayElementProps {
  val: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedDays: string[];
}

const DayElement = ({ val, handler, selectedDays }: DayElementProps) => {
  return (
    <div className="day-element">
      <input
        type="checkbox"
        name={val}
        id={val}
        value={val}
        onChange={handler}
        checked={selectedDays.includes(val)}
      />
      <label htmlFor={val}>{val.slice(0, 3)}</label>
    </div>
  );
};
export default DayElement;
