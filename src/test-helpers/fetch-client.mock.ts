import { expect, vi } from "vitest";
import envsMock from "./envs.mock";
import { FetchArgs } from "@/shared/services/api-client";

type MockRequestArgs = {
  success?: boolean;
  response?: Record<string, unknown>;
};

export function mockRequest({
  response = {},
  success = true,
}: MockRequestArgs = {}) {
  window.fetch = vi.fn().mockResolvedValueOnce({
    ok: success,
    json: async () => response,
  });
}

type ExpectApiClientCallsArgs = {
  callTimes?: number;
} & FetchArgs;

const { SUPABASE_ANON_KEY: API_KEY, SUPABASE_URL: API_URL } = envsMock;

/**
 * Check if fetch client was called with correct request data
 *
 * Before call this expect you need to make a spyOn on the window.fetch
 * like this vi.spyOn(window, "fetch")
 *
 */
export function expectApiClientCalls({
  endpoint,
  method = "GET",
  body,
  headers,
  params,
  callTimes = 1,
}: ExpectApiClientCallsArgs) {
  const url = new URL(`${API_URL}${endpoint}`);
  const searchParams = new URLSearchParams(params);
  url.search = searchParams.toString();

  expect(window.fetch).toHaveBeenCalledWith(
    url,
    expect.objectContaining({
      method,
      headers: {
        "Content-type": "application/json", // default header past on the apiClient
        ...headers,
        apiKey: API_KEY, // default header past on the apiClient
      },
      body: body && JSON.stringify(body),
    })
  );
  expect(window.fetch).toHaveBeenCalledTimes(callTimes);
}
