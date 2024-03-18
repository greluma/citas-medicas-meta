import { type Appointment } from "../features/appSlice";

// * find appointment by id
export function findAppointment(id: string, appointments: Appointment[]) {
  id = id.slice(4);
  return appointments.find((app) => app.id === id);
}
