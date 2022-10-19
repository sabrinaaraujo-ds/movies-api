import React, { useState } from "react";
import { useQuery } from "react-query";
import { getMoviesRequest } from "../../services";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import { Loading } from "../../components/Loading";

import * as S from "./style";

const Home = () => {
  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    if (page >= 5) return;
    setPage((prev) => prev + 1);
    scrollToTop();
  };

  const handlePreviousPage = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
    scrollToTop();
  };

  const { data, isLoading, isError, error, isPreviousData, isFetching } =
    useQuery(
      ["/getMovies", page],

      () => getMoviesRequest(page),
      {
        keepPreviousData: true,
      }
    );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isLoading) return <Loading />;

  if (isFetching) return <Loading />;

  if (isError) return <p>{error.message}</p>;

  return (
    <>
      <S.PageContainer>
        <S.TitleWrapper>
          <h1>POPULAR MOVIES NOW</h1>
        </S.TitleWrapper>
        <S.ContainerWrapper>
          <S.MoviesContainer>
            {data?.map((movie, index) => (
              <Card key={index} movie={movie} />
            ))}
          </S.MoviesContainer>
        </S.ContainerWrapper>
        <Pagination
          pageNumber={page}
          previousPage={handlePreviousPage}
          nextPage={handleNextPage}
          previousData={isPreviousData}
        />
      </S.PageContainer>
    </>
  );
};

export default Home;
