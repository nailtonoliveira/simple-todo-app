import { vi, test, beforeAll, expect } from "vitest";

import * as ApiClient from "./api-client";
import {
  expectApiClientCalls,
  mockRequest,
} from "@/test-helpers/fetch-client.mock";

beforeAll(() => {
  vi.spyOn(window, "fetch");
});

const { apiClient } = ApiClient;

const responseMock = { success: true };

test("should fetch called correctly with just required params", async () => {
  mockRequest({ response: responseMock });

  const endpoint = "/endpoint";

  const result = await apiClient({ endpoint });

  expect(result).toEqual({ success: true });

  expectApiClientCalls({ endpoint });
});

test("should fetch called correctly with all available params", async () => {
  mockRequest({ response: responseMock });

  const config: ApiClient.FetchArgs = {
    endpoint: "/endpoint",
    body: { foo: "bar" },
    headers: { bar: "foo" },
    method: "POST",
    params: { search: "query" },
  };

  const result = await apiClient(config);

  expect(result).toEqual({ success: true });

  expectApiClientCalls(config);
});

test.fails("should fetch throws when rejected", async () => {
  const errorResponse = { code: "ABC", message: "error on load" };

  mockRequest({ response: errorResponse, success: false });

  vi.spyOn(ApiClient, "apiClient");

  const endpoint = "/endpoint";
  await expect(apiClient({ endpoint })).rejects.toBe(1);
});
