import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("Renders Button", () => {
    render(<Button></Button>);
    expect(screen.getByRole("button")).toBeTruthy();
  })
})