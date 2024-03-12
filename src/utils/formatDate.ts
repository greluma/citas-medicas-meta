import { format } from "date-fns";

export function formatDate(date: Date) {
  return format(date, "HH:mm dd/MM/yyyy");
}
