import { afterEach, expect, test } from "vitest";
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";

import TodoPage from "./page";

const inputTodoItem = (todoText: string) =>
  act(() => {
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: todoText },
    });
  });

const clickAddButton = () =>
  act(() => {
    fireEvent.click(screen.getByRole("button", { name: /add/i }));
  });

afterEach(() => cleanup());

test("TodoPage should render empty message correctly", () => {
  render(<TodoPage />);

  expect(screen.getByText(/no tasks todo/i)).toBeDefined();
});

test("TodoPage should add todo items correctly on the list", async () => {
  const addTodoText = "Make a test with this component";

  render(<TodoPage />);

  inputTodoItem(addTodoText);

  clickAddButton();

  expect(screen.getByText(addTodoText)).toBeDefined();
});

test("TodoPage should not add empty todo items on the list", async () => {
  render(<TodoPage />);

  clickAddButton();

  expect(screen.getByTestId("todo-list").childElementCount).toBe(0);
});

test("TodoPage should clear field after add a todo item on the list", async () => {
  render(<TodoPage />);

  inputTodoItem("Todo item");

  clickAddButton();

  expect(screen.getByText("Todo item")).toBeDefined();
  expect(screen.getByRole("textbox")).toHaveValue("");
});

test("TodoPage should avoid adding repeated items on the list", async () => {
  const todoItemText = "Todo item";

  render(<TodoPage />);

  inputTodoItem(todoItemText);
  clickAddButton();

  inputTodoItem(todoItemText);
  clickAddButton();

  expect(screen.getAllByText(todoItemText)).toHaveLength(1);
});

test("TodoPage should delete item from the list correctly", async () => {
  const todoItemText = "Todo item";

  render(<TodoPage />);

  inputTodoItem(todoItemText);
  clickAddButton();

  expect(screen.getByText(todoItemText)).toBeInTheDocument();

  act(() => {
    fireEvent.click(
      screen.getByRole("button", {
        name: /delete ❌/i,
      })
    );
  });

  expect(screen.queryByText(todoItemText)).not.toBeInTheDocument();
});
