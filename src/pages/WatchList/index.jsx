import React, { useContext } from "react";
import Card from "../../components/Card";
import { MovieContext } from "../../Context";

import * as S from "./style";

const WatchList = () => {
  const { watchList } = useContext(MovieContext);

  return (
    <S.PageContainer>
      <S.TitleWrapper>
        <h1>POPULAR MOVIES NOW</h1>
      </S.TitleWrapper>
      <S.ContainerWrapper>
        {watchList.length > 0 ? (
          <S.MoviesContainer>
            {watchList?.map((movie, index) => (
              <Card key={index} movie={movie} />
            ))}
          </S.MoviesContainer>
        ) : (
          <h2>No movies in your watchlist yet</h2>
        )}
      </S.ContainerWrapper>
    </S.PageContainer>
  );
};

export default WatchList;
