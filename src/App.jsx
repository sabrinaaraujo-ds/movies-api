import React from "react";
import * as S from "./style";

const App = (props) => {
  return <S.Container>{props.children}</S.Container>;
};

export default App;
