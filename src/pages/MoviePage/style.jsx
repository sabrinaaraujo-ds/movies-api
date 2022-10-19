import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export const MovieInfoContainer = styled.div`
  display: flex;
  width: 80%;
`;

export const MoviePoster = styled.img`
  max-width: 400px;
  max-height: 500px;

  margin-right: 50px;
  border-radius: 8px;
`;

export const MovieDetails = styled.div`
  max-width: 40rem;
  margin-top: 16px;
  h1,
  h2,
  h3 {
    font-family: "Bebas Neue";
  }

  h1 {
    margin-bottom: 46px;
  }

  p {
    color: #6a6464;
  }
`;

export const Info = styled.div`
  div:first-of-type {
    margin-top: 50px;
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  align-items: baseline;
  h2 {
    margin-right: 40px;
    min-width: 118px;
  }
`;
