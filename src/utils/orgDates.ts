import { Appointment } from "../features/appSlice";

export function orgDates(dates: Appointment[]) {
  return dates.sort((a, b) => a.date.getTime - b.date.getTime);
}
