import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import Greet from "../components/Greet";
import "@testing-library/jest-dom/vitest";

describe("Greet", () => {
  it("should Display name if name is passed unless show login", () => {
    render(<Greet name="Akash" />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/akash/i);
  });

  it("should render login button when name is not passed", () => {
    render(<Greet />);
    const loginBtn = screen.getByRole("button");
    expect(loginBtn).toBeInTheDocument();
    expect(loginBtn).toHaveTextContent(/login/i);
  });
});
