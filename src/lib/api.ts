// eslint-disable-next-line no-unused-vars
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const BE_HOST = "/api";

// make a backend api call
export function callAPI<T>(
  path: string,
  config: AxiosRequestConfig,
): Promise<AxiosResponse<T>> {
  return axios.request<T>({
    url: "https://voiceoceanllp.com:3003" + path,
    paramsSerializer: { indexes: null },
    ...config,
  });
}
