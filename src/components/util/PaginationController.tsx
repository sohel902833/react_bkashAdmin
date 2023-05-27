import React from "react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

interface Props {
  next: () => void;
  prev: () => void;
  totalPage: number;
  currentPage: number;
}

const PaginationController: React.FC<Props> = ({
  next,
  prev,
  currentPage,
  totalPage,
}) => {
  return (
    <div className="btn-group">
      <button onClick={prev} className="btn">
        <MdOutlineNavigateBefore size={25} />
      </button>
      <button className="btn">
        {currentPage} / {totalPage}
      </button>
      <button onClick={next} className="btn">
        <MdOutlineNavigateNext size={25} />
      </button>
    </div>
  );
};

export default PaginationController;
