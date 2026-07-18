import type { IDoctor } from "../Interfaces/Interface";
import { api } from "./Axios";

export const getListDoctor = async () => {
  const response = await api.get<IDoctor>("/doctor/list")
  ;
  return response.data;
};
