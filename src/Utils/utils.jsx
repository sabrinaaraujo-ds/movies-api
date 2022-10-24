import * as React from "react";
import { render } from "@testing-library/react";
import { rest } from "msw";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

// export const handlers = [
//   rest.get("*/users/*", (req, res, ctx) => {
//     return res(
//       ctx.status(200),
//       ctx.json({
//         name: "John Doe",
//       })
//     );
//   }),
// ];

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

export function renderWithClient(ui) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <BrowserRouter>
      <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
    </BrowserRouter>
  );
  return {
    ...result,
    rerender: (rerenderUi) =>
      rerender(
        <BrowserRouter>
          <QueryClientProvider client={testQueryClient}>
            {rerenderUi}
          </QueryClientProvider>
        </BrowserRouter>
      ),
  };
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient();
  return ({ children }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
}
