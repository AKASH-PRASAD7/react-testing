import { render, screen } from "@testing-library/react";
import UserAccount from "../components/UserAccount";

describe("UserAccont", () => {
  it("should display edit button if admin", () => {
    render(
      <UserAccount
        user={{
          id: 1,
          name: "Akash",
          isAdmin: true,
        }}
      />
    );

    const editBtn = screen.getByRole("button");
    expect(editBtn).toBeInTheDocument();
    expect(editBtn).toHaveTextContent("Edit");
  });

  it("should not display edit button if not admin", () => {
    render(
      <UserAccount
        user={{
          id: 1,
          name: "Akash",
          isAdmin: false,
        }}
      />
    );
    const editBtn = screen.queryByRole("button");
    expect(editBtn).not.toBeInTheDocument();
  });

  it("should diplay user name", () => {
    render(
      <UserAccount
        user={{
          id: 1,
          name: "Akash",
          isAdmin: false,
        }}
      />
    );
    expect(screen.getByText("Akash")).toBeInTheDocument();
  });
});
