export const measureBoundOfPagination = (
  currentPage: number,
  amountOfPages: number
) => {
  const minPagePositionToMove = 3;
  const amountOfDisplayedPaginationButtons = 5;
  // If currentPage is 3 pages from the start or from the end
  if (
    currentPage >= minPagePositionToMove &&
    amountOfPages - currentPage >= minPagePositionToMove
  ) {
    return [currentPage - minPagePositionToMove, currentPage + 2];
  }
  // If page positioned at the start
  else if (currentPage < minPagePositionToMove) {
    return [0, amountOfDisplayedPaginationButtons];
  }
  // If page positioned at the end
  else {
    return [amountOfPages - currentPage, amountOfPages];
  }
};
