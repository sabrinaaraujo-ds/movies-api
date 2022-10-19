import React from "react";
import { useQuery } from "react-query";
import { getMovieDetails } from "../services";

export const useFetchMovieDetails = (id) => {
  const { data, isLoading, isError, error } = useQuery(
    ["/getMovieDetails", id],

    () => getMovieDetails(id),
    {
      keepPreviousData: true,
    }
  );
  return { data, isLoading, isError, error };
};
