import { especialistas } from "./getEspecialistas";
import { getRandomUsers } from "./getRandomUsers";
import { uniqueId } from "lodash-es";

export async function createDocs() {
  const especialidades = especialistas();
  const users = await getRandomUsers(especialidades.length);
  const docs = especialidades.map((especialidad, index) => ({
    id: uniqueId("doc_"),
    ...users[index],
    especialidad,
  }));
  return docs;
}

// console.log(await createDocs());
