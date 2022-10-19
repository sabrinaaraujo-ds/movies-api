import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import routes from "../src/routes/index";
import "./index.css";
import { MovieContext, MovieProvider } from "./Context";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{routes}</BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
