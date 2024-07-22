import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import Textarea from "./Textarea";

test("Textarea component", () => {
  const result = render(<Textarea />);

  expect(result).toMatchSnapshot();
});
