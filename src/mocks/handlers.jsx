import { rest } from "msw";
import { getMoviesMock } from "../pages/Home/__mocks__";
import { movieDetailMock } from "../pages/MoviePage/__mocks__";
import { requests } from "../services";

export const handlers = [
  rest.get("*/popular", (req, res, ctx) => {
    //it works
    return res(ctx.status(200), ctx.json(getMoviesMock));
  }),

  rest.get("*/:id", (req, res, ctx) => {
    return res(ctx.json(movieDetailMock));
  }),
];
