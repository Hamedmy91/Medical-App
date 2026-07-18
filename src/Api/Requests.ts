import type { IDoctor } from "../Interfaces/Interface";
import { api } from "./Axios";

interface IGetListDoctor {
  doctors: IDoctor[];
  success: boolean;
}

export const getListDoctor = async () => {
  const response = await api.get<IGetListDoctor>("/doctor/list ");

  return response.data.doctors;
};
