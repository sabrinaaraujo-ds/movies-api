import React from "react";

import { useNavigate } from "react-router-dom";
import * as S from "./style";

const NavBar = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/home");
  };

  const goToWatchList = () => {
    navigate("/watchList");
  };
  return (
    <>
      <S.Nav>
        <S.Logo onClick={goToHome}>MOVIES API</S.Logo>
        <S.WatchList onClick={goToWatchList}>WATCHLIST</S.WatchList>
      </S.Nav>
    </>
  );
};

export default NavBar;
