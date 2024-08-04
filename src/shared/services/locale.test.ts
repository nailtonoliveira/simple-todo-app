import { expect, test, vi } from "vitest";

import { getUserLocale, setUserLocale } from "./locale";

function cookiesStoreMock() {
  const store: Record<string, string> = {
    NEXT_LOCALE: "en",
  };

  return {
    get: function (key: string) {
      return store[key];
    },
    set: function (key: string, value: string) {
      return (store[key] = value);
    },
  };
}

const mockCookies = cookiesStoreMock();

vi.mock("next/headers", () => ({
  cookies: () => mockCookies,
}));

test("getUserLocale should return correct value", async () => {
  const result = await getUserLocale();

  expect(result).toBe("en");
});

test("getUserLocale should return correct value", async () => {
  vi.spyOn(mockCookies, "set");

  await setUserLocale("pt");

  expect(mockCookies.set).toBeCalledWith("NEXT_LOCALE", "pt");
});
