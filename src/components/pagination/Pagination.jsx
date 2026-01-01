"use client";

import CircleButton from "./circle-button/CircleButton";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="d-flex p-3 align-items-center justify-content-end  ">
      <div className="text-sm fw-regular pagination-description ">
        Page <span className="fw-semibold">{currentPage}</span> of{" "}
        <span className="fw-semibold">{totalPages}</span>
      </div>
      <div className="mx-3">
        <CircleButton
          Link="/images/icons/chevron-left.svg"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        />
      </div>

      <div className="mx-2">
        <CircleButton
          Link="/images/icons/chevron-right.svg"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === 10}
        />
      </div>

      {/* {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={currentPage === i + 1 ? "font-bold" : ""}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))} */}
    </div>
  );
}
