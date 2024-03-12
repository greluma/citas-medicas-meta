import { especialistas } from "./getEspecialistas";
import { getRandomUsers, type UserBasicData } from "./getRandomUsers";
import { uniqueId } from "lodash-es";

export interface Doctor extends UserBasicData {
  id: string;
  especialidad: string;
}

export async function createDocs(): Promise<Doctor[]> {
  const especialidades = especialistas();
  const users = await getRandomUsers(especialidades.length);
  const docs = especialidades.map((especialidad, index) => ({
    id: uniqueId("doc_"),
    ...users[index],
    especialidad,
  }));
  return docs;
}
