import { screen, render } from "@testing-library/react";
import { Navigation } from "./Navigation";

import user from "@testing-library/user-event";

describe("Two navigation buttons are rendered and", () => {
  it("should be exactly two button elements", () => {
    render(<Navigation page={1} setPage={() => 1} />);
    expect(screen.getAllByRole("button").length).toBe(2);
  }),
    it("should render with disabled previous button and enable it when clicked next page", async () => {
      const renderedNavigation = render(
        <Navigation page={1} setPage={() => 1} />
      );
      const prevButton = await renderedNavigation.findByText(/Previous/i);
      const nextButton = await renderedNavigation.findByText(/Next/i);
      expect(prevButton).toBeDisabled();
      user.click(nextButton);
      !expect(prevButton).toBeDisabled;
    });
});
