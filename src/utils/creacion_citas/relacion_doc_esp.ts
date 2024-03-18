import { especialistas } from "./getEspecialistas";
import { getRandomUsers, type UserBasicData } from "./getRandomUsers";
import { v4 as uuidv4 } from "uuid";

export interface Doctor extends UserBasicData {
  id: string;
  especialidad: string;
}

// * generar datos de doctores random
export async function createDocs(): Promise<Doctor[]> {
  // obtener especialidades ordenadas alfabéticamente
  const especialidades = especialistas();
  // obtener usuarios random
  const users = await getRandomUsers(especialidades.length);

  // relacionar usuarios con especialidades
  const docs = especialidades.map((especialidad, index) => ({
    id: `doc_${uuidv4()}`,
    ...users[index],
    especialidad,
  }));
  return docs;
}
