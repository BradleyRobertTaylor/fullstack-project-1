/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { EnterNumberForm } from "./EnterNumberForm";

test("Enter button rendered", () => {
  const mockFn = jest.fn();
  render(<EnterNumberForm onSubmit={mockFn} />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("onSubmit is called", async () => {
  const mockFn = jest.fn();
  render(<EnterNumberForm onSubmit={mockFn} />);
  const input = screen.getByRole("textbox");
  const button = screen.getByRole("button");
  const user = userEvent.setup();
  await user.type(input, "100");
  await user.click(button);
  expect(mockFn.mock.calls.length).toBe(1);
});
