import { describe, test, vi } from "vitest";
import { renderWithClient } from "../../Utils/utils";
import Home from ".";
import { screen } from "@testing-library/react";

describe("Home", () => {
  beforeEach(() => {
    renderWithClient(<Home />);
  });

  test("Should render page title", async () => {
    expect(await screen.findByText("POPULAR MOVIES NOW")).toBeInTheDocument();
  });

  test("Should render Movie Info", async () => {
    const poster = await screen.findAllByRole("img");
    expect(poster[0]).toHaveAttribute("alt", "movie poster");
  });

  test("Should render button", async () => {
    const addButton = await screen.findAllByTestId("add-button");
    screen.debug();
    expect(addButton[0]).toBeInTheDocument();
  });
});
