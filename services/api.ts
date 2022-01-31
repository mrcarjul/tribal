import axios from "axios";

/**
 * @description Creates an Axios Instance
 * @param baseURL Default api url
 */
const create = (baseURL = process.env.API_URL) => {
  const api = axios.create({
    baseURL,
    timeout: 25000,
    headers: {
      "x-api-key": process.env.API_KEY as string,
    },
  });

  return api;
};

export const API = create();
