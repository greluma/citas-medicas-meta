import { format } from "date-fns";

export function formatDate(date: Date) {
  return {
    date: format(date, "dd/MM/yyyy"),
    time: format(date, "HH:mm"),
    getTime: date.getTime(),
  };
}
