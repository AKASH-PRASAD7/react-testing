import UserList from "../components/UserList";
import { User } from "../entities";
import { render, screen } from "@testing-library/react";

describe("User List", () => {
  it("should print no user available if user[] is empty", () => {
    const users: User[] = [];
    render(<UserList users={users} />);
    const msg = screen.getByRole("paragraph");
    expect(msg).toBeInTheDocument();
    expect(msg).toHaveTextContent(/no users available/i);
  });

  it("should print no user available if user[] is empty", () => {
    const users: User[] = [];
    render(<UserList users={users} />);
    const msg = screen.getByRole("paragraph");
    expect(msg).toBeInTheDocument();
    expect(msg).toHaveTextContent(/no users available/i);
  });

  it("should print list of users", () => {
    const users: User[] = [
      { id: 1, name: "Akash" },
      { id: 2, name: "John" },
    ];
    render(<UserList users={users} />);
    users.forEach((list) => {
      const link = screen.getByRole("link", { name: list.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${list.id}`);
    });
  });
});
