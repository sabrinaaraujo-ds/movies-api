import { rest } from "msw";
import { getMoviesMock } from "../pages/Home/__mocks__";

export const handlers = [
  rest.get("/getMovie", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(getMoviesMock));
  }),
];
