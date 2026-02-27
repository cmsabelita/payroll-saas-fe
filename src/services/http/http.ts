import axios, { type AxiosInstance, type AxiosResponse } from "axios";
import { config } from "@/config";
import type {
  ErrorInterceptor,
  HttpError,
  HttpRequestConfig,
  HttpResponse,
  HttpServiceInterface,
  RequestInterceptor,
  ResponseInterceptor,
} from "./http.types";

const API_TIMEOUT = 10000;

const transformEmptyStringsToNull = <T>(data: T): T => {
  if (data === null || data === undefined) return data;
  if (typeof data === "string" && data === "") return null as T;
  if (Array.isArray(data)) return data.map(transformEmptyStringsToNull) as T;
  if (typeof data === "object" && data !== null) {
    const out: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(data)) {
      out[key] = transformEmptyStringsToNull(value);
    }
    return out as T;
  }
  return data;
};

const createHttpClient = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: config.apiUrl,
    timeout: API_TIMEOUT,
    headers: { "Content-Type": "application/json" },
  });

  instance.interceptors.request.use(
    (requestConfig) => {
      const customConfig = requestConfig as HttpRequestConfig;
      if (requestConfig.data && !(requestConfig.data instanceof FormData)) {
        requestConfig.data = transformEmptyStringsToNull(requestConfig.data);
      }
      if (requestConfig.params) {
        requestConfig.params = transformEmptyStringsToNull(requestConfig.params);
      }
      if (!customConfig.skipLogging) {
        console.debug(
          `HTTP ${requestConfig.method?.toUpperCase()} ${requestConfig.url}`,
          { params: requestConfig.params },
        );
      }
      return requestConfig;
    },
    (error) => {
      console.error("HTTP request error", error);
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response) => {
      const customConfig = response.config as HttpRequestConfig;
      if (!customConfig.skipLogging) {
        console.debug(
          `HTTP ${response.status} ${response.config.method?.toUpperCase()} ${response.config.url}`,
        );
      }
      return response;
    },
    (error) => {
      if (axios.isAxiosError(error)) {
        const httpError: HttpError = {
          message: error.message,
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data,
          config: error.config as HttpRequestConfig,
        };
        console.error("HTTP error", httpError.status, httpError.data);
        return Promise.reject(httpError);
      }
      console.error("HTTP error", error);
      return Promise.reject(error);
    },
  );

  return instance;
};

const httpClient = createHttpClient();

const mapAxiosResponse = <T>(res: AxiosResponse<T>): HttpResponse<T> => ({
  data: res.data,
  status: res.status,
  statusText: res.statusText,
  headers: res.headers as Record<string, string>,
});

export const get = async <T = unknown>(
  url: string,
  cfg?: HttpRequestConfig,
): Promise<HttpResponse<T>> => {
  const res = await httpClient.get<T>(url, cfg);
  return mapAxiosResponse(res);
};

export const post = async <T = unknown>(
  url: string,
  data?: unknown,
  cfg?: HttpRequestConfig,
): Promise<HttpResponse<T>> => {
  const res = await httpClient.post<T>(url, data, cfg);
  return mapAxiosResponse(res);
};

export const put = async <T = unknown>(
  url: string,
  data?: unknown,
  cfg?: HttpRequestConfig,
): Promise<HttpResponse<T>> => {
  const res = await httpClient.put<T>(url, data, cfg);
  return mapAxiosResponse(res);
};

export const patch = async <T = unknown>(
  url: string,
  data?: unknown,
  cfg?: HttpRequestConfig,
): Promise<HttpResponse<T>> => {
  const res = await httpClient.patch<T>(url, data, cfg);
  return mapAxiosResponse(res);
};

export const deleteRequest = async <T = unknown>(
  url: string,
  cfg?: HttpRequestConfig,
): Promise<HttpResponse<T>> => {
  const res = await httpClient.delete<T>(url, cfg);
  return mapAxiosResponse(res);
};

export const addRequestInterceptor = (interceptor: RequestInterceptor) =>
  httpClient.interceptors.request.use(
    interceptor as never,
    (err) => Promise.reject(err),
  );

export const addResponseInterceptor = (interceptor: ResponseInterceptor) =>
  httpClient.interceptors.response.use(
    interceptor as never,
    (err) => Promise.reject(err),
  );

export const addErrorInterceptor = (interceptor: ErrorInterceptor) =>
  httpClient.interceptors.response.use((res) => res, interceptor);

export const removeInterceptor = (id: number) => {
  httpClient.interceptors.request.eject(id);
  httpClient.interceptors.response.eject(id);
};

export const httpService: HttpServiceInterface = {
  get,
  post,
  put,
  patch,
  delete: deleteRequest,
  addRequestInterceptor,
  addResponseInterceptor,
  addErrorInterceptor,
  removeInterceptor,
};
