import { describe, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import ReactRouter from "react-router-dom";
import { renderWithClient } from "../../Utils/utils";

import MoviePage from ".";
const mockNavigate = vi.fn().mockReturnValue({ id: 616820 });
vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom")),
  useParams: () => mockNavigate,
}));

describe("Movie Page", () => {
  beforeEach(() => {
    renderWithClient(<MoviePage />);
  });

  it("Should render movie title", async () => {
    screen.debug();
    expect(await screen.findByText(/halloween ends/i)).toBeInTheDocument();
  });

  it("Should render movie info", async () => {
    expect(await screen.findByText(/release date/i)).toBeInTheDocument();
    expect(await screen.findByText(/runtime/i)).toBeInTheDocument();
    expect(await screen.findByText(/studio/i)).toBeInTheDocument();
    expect(await screen.findByText(/origin country/i)).toBeInTheDocument();
    expect(await screen.findByText(/genres/i)).toBeInTheDocument();
    expect(await screen.findByText(/rating/i)).toBeInTheDocument();
  });
});
