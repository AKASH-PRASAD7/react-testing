import { render, screen } from "@testing-library/react";
import ExpandableText from "../components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("Expandable Text", () => {
  it("should display only article if text under limit", () => {
    render(<ExpandableText text="hello world!" />);
    expect(screen.getByRole("article")).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("should display only 255 characters if show more is not clicked", async () => {
    const text =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel autem molestiae doloribus voluptates natus repellendus tempora consectetur laboriosam? Quam distinctio odio nobis consequuntur repellendus possimus ab saepe minus. Nam eum non pariatur, in nulla nisi harum asperiores delectus quod animi, voluptates officia consequuntur, eveniet est porro quidem ullam? Ex suscipit deleniti delectus quas voluptatem quibusdam minus modi dicta, natus, inventore adipisci ipsam dolores voluptates.";
    render(<ExpandableText text={text} />);
    const trucatedtext = text.substring(0, 255) + "...";
    const showMore = screen.getByRole("button");
    expect(showMore).toBeInTheDocument();
    expect(screen.getByRole("article")).toBeInTheDocument();
    expect(screen.getByText(trucatedtext)).toBeInTheDocument();
    expect(showMore).toHaveTextContent(/show more/i);

    const user = userEvent.setup();
    await user.click(showMore);

    expect(showMore).toHaveTextContent(/show less/i);
    expect(screen.getByRole("article")).toBeInTheDocument();
    expect(screen.getByRole("article")).toHaveTextContent(text);

    await user.click(showMore);
    expect(screen.getByRole("article")).toBeInTheDocument();
    expect(screen.getByText(trucatedtext)).toBeInTheDocument();
    expect(showMore).toHaveTextContent(/show more/i);
  });
});
