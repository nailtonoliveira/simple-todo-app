import { vi } from "vitest";

import envsMock from "./src/test-helpers/envs.mock";

for (let [envName, envValue] of Object.entries(envsMock)) {
  vi.stubEnv(envName, envValue);
}
