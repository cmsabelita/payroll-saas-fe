import type { AxiosRequestConfig, AxiosResponse } from "axios";

export type AuthStrategy = "app" | "user" | "basic" | "public";

export interface BasicAuthCredentials {
  username: string;
  password: string;
}

export interface HttpRequestConfig extends AxiosRequestConfig {
  authStrategy?: AuthStrategy;
  basicAuth?: BasicAuthCredentials;
  skipLogging?: boolean;
  skipAuth?: boolean;
}

export interface HttpResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

export interface HttpError {
  message: string;
  status?: number;
  statusText?: string;
  data?: unknown;
  config?: HttpRequestConfig;
}

export type RequestInterceptor = (
  config: HttpRequestConfig,
) => HttpRequestConfig | Promise<HttpRequestConfig>;

export type ResponseInterceptor<T = unknown> = (
  response: AxiosResponse<T>,
) => AxiosResponse<T> | Promise<AxiosResponse<T>>;

export type ErrorInterceptor = (error: unknown) => Promise<never>;

export interface HttpServiceInterface {
  get: <T = unknown>(
    url: string,
    config?: HttpRequestConfig,
  ) => Promise<HttpResponse<T>>;
  post: <T = unknown>(
    url: string,
    data?: unknown,
    config?: HttpRequestConfig,
  ) => Promise<HttpResponse<T>>;
  put: <T = unknown>(
    url: string,
    data?: unknown,
    config?: HttpRequestConfig,
  ) => Promise<HttpResponse<T>>;
  patch: <T = unknown>(
    url: string,
    data?: unknown,
    config?: HttpRequestConfig,
  ) => Promise<HttpResponse<T>>;
  delete: <T = unknown>(
    url: string,
    config?: HttpRequestConfig,
  ) => Promise<HttpResponse<T>>;
  addRequestInterceptor: (interceptor: RequestInterceptor) => number;
  addResponseInterceptor: (interceptor: ResponseInterceptor) => number;
  addErrorInterceptor: (interceptor: ErrorInterceptor) => number;
  removeInterceptor: (id: number) => void;
}
