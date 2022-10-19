import styled from "@emotion/styled";

export const PaginationContainer = styled.div`
  padding: 10px;
  margin-bottom: 32px;

  display: flex;
  justify-content: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
  width: 150px;
  height: 35px;
  border-radius: 10px;
`;

export const Button = styled.button`
  width: 50px;
  height: 100%;
  background-color: #ffffff;
  border: 0.5px solid #cccccc;
  border-radius: 5px 0 0 5px;

  svg {
    color: ${(props) => (props.isActive ? "#e9424d" : "#cccccc")};
    margin-top: 2px;
  }

  &:last-of-type {
    border-radius: 0 5px 5px 0;
  }

  &:hover {
    cursor: pointer;
  }

  :disabled {
    svg {
      color: #cccccc;
    }
    cursor: default;
  }
`;

export const PageNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid #cccccc;
  width: 50px;
  height: 100%;
  background-color: #ffffff;
`;
