import styled from "@emotion/styled";

export const ContainerWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MoviesContainer = styled.div`
  width: 95%;
  margin-top: 32px;
  padding: 0 32px 0 39px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    font-family: "Bebas Neue";
    font-size: 60px;
  }
`;

export const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
