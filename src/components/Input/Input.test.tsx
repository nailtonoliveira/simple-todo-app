import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import Input from "./Input";

test("Input component", () => {
  const result = render(<Input />);

  expect(result).toMatchSnapshot();
});
