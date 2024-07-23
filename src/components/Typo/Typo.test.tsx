import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import Typo from "./Typo";

test("Typo component", () => {
  const result = render(<Typo variant="body" />);

  expect(result).toMatchSnapshot();
});
