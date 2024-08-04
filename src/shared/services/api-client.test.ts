import { vi, test, beforeAll, expect } from "vitest";

import * as ApiClient from "./api-client";

const API_URL = "http://localhost.com";
const API_KEY = "api-secret-key";

vi.stubEnv("SUPABASE_URL", API_URL);
vi.stubEnv("SUPABASE_ANON_KEY", API_KEY);

beforeAll(() => {
  vi.spyOn(window, "fetch");
});

const { apiClient } = ApiClient;

test("should fetch called correctly with just required params", async () => {
  window.fetch = vi.fn().mockResolvedValueOnce({
    ok: true,
    json: async () => ({ success: true }),
  });

  const endpoint = "/endpoint";

  const result = await apiClient({ endpoint });

  expect(result).toEqual({ success: true });

  expect(window.fetch).toHaveBeenCalledWith(
    new URL(`${API_URL}${endpoint}`),
    expect.objectContaining({
      method: "GET",
      headers: {
        "Content-type": "application/json",
        apiKey: API_KEY,
      },
    })
  );
  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test("should fetch called correctly with all available params", async () => {
  window.fetch = vi.fn().mockResolvedValueOnce({
    ok: true,
    json: async () => ({ success: true }),
  });

  const config: ApiClient.FetchArgs = {
    endpoint: "/endpoint",
    body: { foo: "bar" },
    headers: { bar: "foo" },
    method: "POST",
    params: { search: "query" },
  };

  const finalUrl = new URL(`${API_URL}${config.endpoint}`);
  finalUrl.search = new URLSearchParams(config.params).toString();

  const result = await apiClient(config);

  expect(result).toEqual({ success: true });

  expect(window.fetch).toHaveBeenCalledWith(
    finalUrl,
    expect.objectContaining({
      method: config.method,
      headers: {
        "Content-type": "application/json",
        apiKey: API_KEY,
        ...config.headers,
      },
      body: JSON.stringify(config.body),
    })
  );
  expect(window.fetch).toHaveBeenCalledTimes(1);
});

test.fails("should fetch throws when rejected", async () => {
  const errorResponse = { code: "ABC", message: "error on load" };

  window.fetch = vi.fn().mockResolvedValueOnce({
    ok: false,
    json: async () => errorResponse,
  });

  vi.spyOn(ApiClient, "apiClient");

  const endpoint = "/endpoint";
  await expect(apiClient({ endpoint })).rejects.toBe(1);
});
