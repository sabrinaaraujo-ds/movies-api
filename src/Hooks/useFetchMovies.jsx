import React from "react";
import { useQuery } from "react-query";
import { getMoviesRequest } from "../services";

export const useFetchMovies = () => {
  const { data, isLoading, isError, error, isPreviousData, isFetching } =
    useQuery(
      ["/getMovies", page],

      () => getMoviesRequest(page),
      {
        keepPreviousData: true,
      }
    );
  return { data, isLoading, isError, error, isPreviousData, isFetching };
};
