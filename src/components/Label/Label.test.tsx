import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import Label from "./Label";

test("Label component", () => {
  const result = render(<Label>Label</Label>);

  expect(result).toMatchSnapshot();
});
