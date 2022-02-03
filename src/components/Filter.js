import React from "react";

const Filter = ({ count, sort, sortProducts }) => {
  return (
    <div className="filter">
      <div className="filter-result">{count} Products</div>
      <div className="filter-sort">
        Order{" "}
        <select value={sort} onChange={sortProducts}>
          <option value="">Latest</option>
          <option value="Lowest">Lowest</option>
          <option value="Highest">Highest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
