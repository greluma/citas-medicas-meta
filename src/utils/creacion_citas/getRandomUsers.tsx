import axios from "axios";

interface UserName {
  first: string;
  last: string;
}

interface UserPicture {
  thumbnail: string;
  medium: string;
  large: string;
}

interface UserFromAPI {
  name: UserName;
  email: string;
  picture: UserPicture;
  phone: string;
}

export interface UserBasicData {
  name: string;
  email: string;
  picture: string;
  phone: string;
}

// * generar datos de usuarios random
export async function getRandomUsers(
  cantidad: number = 10
): Promise<UserBasicData[]> {
  try {
    const response = await axios.get(
      `https://randomuser.me/api/?results=${cantidad}`
    );
    const users: UserFromAPI[] = response.data.results;
    return users.map((user) => ({
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      picture:
        user.picture.thumbnail || user.picture.medium || user.picture.large,
      phone: user.phone,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}
