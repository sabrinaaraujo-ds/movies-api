import React from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { useFetchMovieDetails } from "../../Hooks/useFetchMovieDetails";

import * as S from "./style";

const MoviePage = () => {
  let params = useParams();

  const convertTime = (num) => {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + "h" + minutes;
  };
  const { data, isLoading, isError, error } = useFetchMovieDetails(params.id);

  const path = `https://image.tmdb.org/t/p/original${data?.poster_path}`;

  if (isLoading) return <Loading />;

  if (isError) return <p>{error.message}</p>;

  return (
    <S.Container>
      <S.MovieInfoContainer>
        <S.MoviePoster src={path}></S.MoviePoster>
        <S.MovieDetails>
          <S.Info>
            <h1>{data.title}</h1>
            <h2>DESCRIPTION</h2>
            <p>{data.overview}</p>
            <S.DetailWrapper>
              <h2>Release Date</h2>
              <p>{data.release_date}</p>
            </S.DetailWrapper>
            <S.DetailWrapper>
              <h2>Runtime</h2>
              <p>{convertTime(data.runtime)}</p>
            </S.DetailWrapper>
            <S.DetailWrapper>
              <h2>Studio</h2>
              <p>{data.production_companies[0].name}</p>
            </S.DetailWrapper>
            <S.DetailWrapper>
              <h2>Origin Country</h2>
              <p>{data.production_countries[0].name}</p>
            </S.DetailWrapper>
            <S.DetailWrapper>
              <h2>Genres</h2>
              {data.genres.map((g, i) => (
                <p key={i}>{g.name}</p>
              ))}
            </S.DetailWrapper>
            <S.DetailWrapper>
              <h2>Rating</h2>
              <p>{data.vote_average.toFixed(2)}</p>
            </S.DetailWrapper>
          </S.Info>
        </S.MovieDetails>
      </S.MovieInfoContainer>
    </S.Container>
  );
};

export default MoviePage;
