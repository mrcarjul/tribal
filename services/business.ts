import { AxiosInstance } from "axios";
import { Business } from "../types";

export const businessEndpoints = (api: AxiosInstance) => ({
  addBusiness: (name: string) => api.post("/business", { name }),
  deleteBusiness: (businessId: string) => api.delete(`/business/${businessId}`),
  updateBusiness: (body: Business) =>
    api.put(`/business/${body.businessId}`, { name: body.name }),
});
