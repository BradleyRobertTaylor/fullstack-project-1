/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { getMedian } from "./services/medianService";
import userEvent from "@testing-library/user-event";
import App from "./App";

jest.mock("./services/medianService.ts");
const getMedianMock = getMedian as jest.MockedFunction<typeof getMedian>;

test("h1 is rendered", () => {
  render(<App />);
  const h1 = screen.getByRole("heading");
  expect(h1).toBeInTheDocument();
});

test("median answer rendered to the screen", async () => {
  render(<App />);
  getMedianMock.mockResolvedValue({ median: [7] });
  const input = screen.getByRole("textbox");
  const button = screen.getByRole("button");
  const user = userEvent.setup();
  await user.type(input, "18");
  await user.click(button);
  const span = await screen.findByText(/7/);
  expect(span).toBeInTheDocument();
});

test("toast notification rendered with invalid input", async () => {
  // need to add this property to work with react-hot-toast
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  render(<App />);
  getMedianMock.mockResolvedValue({ error: "That input is invalid." });
  const input = screen.getByRole("textbox");
  const button = screen.getByRole("button");
  const user = userEvent.setup();
  await user.type(input, "hello");
  await user.click(button);
  const toast = await screen.findByRole("status");
  expect(toast).toBeInTheDocument();
});
