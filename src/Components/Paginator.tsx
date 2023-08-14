import { CPagination, CPaginationItem } from "@coreui/react";

interface PaginatorProps {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

const Paginator = (props: PaginatorProps) => {
  const handleIncrease = () => {
    props.setCurrentPage(props.currentPage + 1);
  };
  const handleDecrease = () => {
    props.currentPage > 1 && props.setCurrentPage(props.currentPage - 1);
  };

  return (
    <CPagination aria-label="Page navigation example">
      <CPaginationItem aria-label="Previous">
        <span onClick={() => handleDecrease()} aria-hidden="true">
          &laquo;
        </span>
      </CPaginationItem>
      <CPaginationItem>{props.currentPage}</CPaginationItem>
      <CPaginationItem
        onClick={() => props.setCurrentPage(props.currentPage + 1)}
      >
        {props.currentPage + 1}
      </CPaginationItem>
      <CPaginationItem
        onClick={() => props.setCurrentPage(props.currentPage + 2)}
      >
        {props.currentPage + 2}
      </CPaginationItem>
      <CPaginationItem aria-label="Next">
        <span onClick={() => handleIncrease()} aria-hidden="true">
          &raquo;
        </span>
      </CPaginationItem>
    </CPagination>
  );
};
export default Paginator;
