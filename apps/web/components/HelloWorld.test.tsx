import { HelloWorld } from "./HelloWorld";
import { render, screen } from "@testing-library/react";

test("Renders Hello World", () => {
  render(<HelloWorld />);
  expect(screen.getByText("Hello World")).toBeTruthy();
});
