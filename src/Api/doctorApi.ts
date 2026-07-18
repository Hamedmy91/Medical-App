import { api } from "./Axios";
import type { IDoctor } from "../Interfaces/Interface";

interface DoctorResponse {
  success: boolean;
  doctors: IDoctor[];
}

export const getListDoctor = async () => {
  const { data } = await api.get<DoctorResponse>("/doctor/list", {
    params: {
      limit: 10,
    },
  });

  return data.doctors;
};
