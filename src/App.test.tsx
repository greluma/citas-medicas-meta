import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("Renders main page correctly", async () => {
  render(<App />);
  const heading = await screen.findByRole("heading", {
    name: /app/i,
  });
  expect(heading).toBeInTheDocument();
});
