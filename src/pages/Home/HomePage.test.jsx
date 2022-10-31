import { describe, it } from "vitest";
import { fireEvent, screen } from "@testing-library/react";
import { debug } from "vitest-preview";
import { renderWithClient } from "../../Utils/utils";
import Home from ".";

describe("HomePage", () => {
  beforeEach(() => {
    renderWithClient(<Home />);
  });
  debug();
  it("Should render page title", async () => {
    expect(await screen.findByText("POPULAR MOVIES NOW")).toBeInTheDocument();
  });

  it("Should render Movie poster", async () => {
    const poster = await screen.findByRole("img");
    expect(poster).toHaveAttribute("alt", "movie poster");
  });

  it("Should render add button", async () => {
    const addButton = await screen.findByTestId("add-button");
    expect(addButton).toBeInTheDocument();
  });
});
