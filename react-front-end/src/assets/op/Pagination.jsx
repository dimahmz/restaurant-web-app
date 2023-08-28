import React from "react";

const Pagination = ({ currentPage, pageCount, handlePageChange }) => {
    return (
        <div>
            <button onClick={handlePageChange(currentPage - 1)}>
                Previous
            </button>
            {Array.from({ length: pageCount }, (_, i) => (
                <button key={i} onClick={handlePageChange(i + 1)}>
                    {i + 1}
                </button>
            ))}
            <button onClick={handlePageChange(currentPage + 1)}>Next</button>
        </div>
    );
};

export default Pagination;
