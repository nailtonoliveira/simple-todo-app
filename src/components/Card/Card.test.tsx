import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import Card from "./Card";

test("Card component", () => {
  const result = render(<Card>Card</Card>);

  expect(result).toMatchSnapshot();
});
