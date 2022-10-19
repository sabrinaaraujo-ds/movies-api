import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { QueryClient, QueryClientProvider } from "react-query";
import { describe, it, vi } from "vitest";
import Home from ".";
import { useFetchMovies } from "../../Hooks/useFetchMovies";

vi.mock("./useFetchMovies", () => ({
  useFetchMovies: vi.fn(),
}));

describe("Home", () => {
  // beforeEach(() => {
  //   useFetchMovies.mockImplementation(() => ({}));
  // });
  // it("shpuld render data", () => {
  //   render(<Home />);
  //   screen.debug()
  // });
});
