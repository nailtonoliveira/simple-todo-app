export type HttpMethods = "GET" | "POST" | "PUT" | "DELETE";

export type FetchArgs = {
  body?: Record<string, string>;
  endpoint: string;
  headers?: Record<string, string>;
  method?: HttpMethods;
  params?: Record<string, string>;
};

type ResponseError = {
  code: string;
  message: string;
};

export async function apiClient<T>({
  body,
  endpoint,
  headers = {},
  method = "GET",
  params = {},
}: FetchArgs): Promise<T> {
  const BASE_API_URL = process.env.SUPABASE_URL || "";
  const SUPABASE_API_KEY = process.env.SUPABASE_ANON_KEY || "";

  const url = new URL(`${BASE_API_URL}${endpoint}`);

  const urlSearchParams = new URLSearchParams(params);

  url.search = new URLSearchParams({
    ...Object.fromEntries(url.searchParams),
    ...Object.fromEntries(urlSearchParams),
  }).toString();

  const response = await fetch(url, {
    method,
    headers: {
      "Content-type": "application/json",
      ...headers,
      apiKey: SUPABASE_API_KEY,
    },
    body: body && JSON.stringify(body),
  });

  if (response.ok) {
    const data: T = await response.json();

    return data;
  }

  const { code, message }: ResponseError = await response.json();

  const error = new Error(code && message ? `${code}: ${message}` : "unknown");

  return Promise.reject(error);
}
