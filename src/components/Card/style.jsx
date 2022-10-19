import styled from "@emotion/styled";

export const CardContainer = styled.div`
  margin-right: 24px;
  margin-bottom: 10px;

  img {
    display: block;
    top: 0px;
    position: relative;
    width: 207px;
    height: 300px;
    border-radius: 8px;
  }

  img:hover {
    transition: all 0.4s ease-out;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.5);
    top: -7px;
    border: 1px solid #cccccc;
    background-color: #cccccc;
    cursor: pointer;
  }

  p {
    color: #333333;
  }
`;

export const MovieTitle = styled.h4`
  margin-top: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 180px;
  overflow: hidden;
`;

export const AddButton = styled.div`
  pointer-events: ${(props) => (props.isDisabled ? "none" : "auto")};
  svg {
    fill: ${(props) => (props.isDisabled ? "gray" : "green")};
    cursor: pointer;
  }
`;
export const RemoveButton = styled.div`
  svg {
    fill: red;
    cursor: pointer;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 4rem;
  }
`;
