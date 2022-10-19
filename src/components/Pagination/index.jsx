import React from "react";
import { MdArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import * as S from "./style";

const Pagination = ({ pageNumber, previousPage, nextPage, previousData }) => {
  const disablePreviousButton = previousData || pageNumber === 1;
  const disableNextButton = previousData || pageNumber >= 5;
  const isPreviousButtonActive = pageNumber > 1;
  const isNextButtonActive = pageNumber <= 5;

  return (
    <S.PaginationContainer>
      <S.ButtonsWrapper>
        <S.Button
          data-testid="previous-button"
          onClick={previousPage}
          disabled={disablePreviousButton}
          isActive={isPreviousButtonActive}
        >
          <MdArrowBackIos />
        </S.Button>
        <S.PageNumber>
          <p>{pageNumber}</p>
        </S.PageNumber>
        <S.Button
          data-testid="next-button"
          onClick={nextPage}
          disabled={disableNextButton}
          isActive={isNextButtonActive}
        >
          <MdOutlineArrowForwardIos />
        </S.Button>
      </S.ButtonsWrapper>
    </S.PaginationContainer>
  );
};

export default Pagination;
