"use client";
import React from "react";

const ToursPagination = ({
  handlePagination,
  activePage,
  forwardPagination,
  backwardPagination,
}) => {
  return (
    <div className="pagination-sub-container">
      <div aria-label="Page navigation">
        <ul className="pagination-list">
          <li>
            <button
              onClick={backwardPagination}
              className="pagination-backward-btn"
            >
              <svg
                style={{ width: "16px", height: "16px" }}
                viewBox="0 0 20 20"
              >
                <path
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          <li>
            <button className={`pagination-btn pagination-active-btn`}>
              {activePage + 1}
            </button>
          </li>
          <li>
            <button
              onClick={forwardPagination}
              className="pagination-backward-btn"
            >
              <svg
                style={{ width: "16px", height: "16px" }}
                viewBox="0 0 20 20"
              >
                <path
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ToursPagination;
