/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MedianDisplay } from "./MedianDisplay";

test("h2 rendered to screen", () => {
  render(<MedianDisplay answer={[10]} />);
  const h2 = screen.getByRole("heading", { level: 2 });
  expect(h2).toBeInTheDocument();
});
