import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import Button from "./Button";

test("Button component", () => {
  const result = render(<Button>button</Button>);

  expect(result).toMatchSnapshot();
});
