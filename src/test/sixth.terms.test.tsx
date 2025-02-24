import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("Terms&Conditions", () => {
  it("should display heading and render checkbox", () => {
    render(<TermsAndConditions />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/terms & conditions/i);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/submit/i);
    expect(button).toBeDisabled();
  });

  it("should be enabled when checkbox is checked", async () => {
    render(<TermsAndConditions />);
    const checkbox = screen.getByRole("checkbox");
    const user = userEvent.setup();

    await user.click(checkbox);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });
});
