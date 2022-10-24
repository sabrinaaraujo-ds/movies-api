import React, { useContext } from "react";
import { IoIosAddCircle, IoMdRemoveCircle } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { MovieContext } from "../../Context";
import * as S from "./style";

const Card = ({ movie }) => {
  const { addMovieToWatchList, removeMovieFromWatchList, watchList } =
    useContext(MovieContext);
  const navigate = useNavigate();
  const location = useLocation();
  const path = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
  const onCardClick = () => {
    navigate(`/comic/${movie.id}`);
  };

  const alreadyInList = watchList.find((m) => m.id === movie.id);
  const isMovieInWatchlist = alreadyInList ? true : false;

  return (
    <S.CardContainer>
      <img onClick={onCardClick} src={path} alt="movie poster"></img>
      <S.MovieTitle>{movie.title}</S.MovieTitle>
      <S.Info>
        <p>Rating: {movie.vote_average}</p>

        {location.pathname === "/watchList" ? (
          <S.RemoveButton data-testid="add-button">
            <IoMdRemoveCircle
              size="2rem"
              onClick={() => removeMovieFromWatchList(movie.id)}
            />
          </S.RemoveButton>
        ) : (
          <S.AddButton data-testid="add-button" isDisabled={isMovieInWatchlist}>
            <IoIosAddCircle
              size="2rem"
              onClick={() => addMovieToWatchList(movie)}
            />
          </S.AddButton>
        )}
      </S.Info>
    </S.CardContainer>
  );
};

export default Card;
