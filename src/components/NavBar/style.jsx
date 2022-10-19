import styled from "@emotion/styled";

export const Nav = styled.nav`
  width: 100%;
  height: 5rem;
  background-color: #ec1d24;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;
export const Logo = styled.h3`
  font-family: "Bebas Neue";
  font-size: 35px;
  cursor: pointer;
`;

export const WatchList = styled.h3`
  font-family: "Bebas Neue";
  font-size: 35px;
  cursor: pointer;
`;
export const Search = styled.div``;

export const Input = styled.input`
  border: none;
  width: 250px;
  font-size: 18px;
  background-color: transparent;
  border-bottom: 2px solid #ffffff;
  color: #ffffff;

  &:focus {
    outline: none;
  }
`;
