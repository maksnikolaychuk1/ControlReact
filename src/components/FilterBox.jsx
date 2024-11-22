import React from "react";

const FilterBox = ({ filter, setFilter }) => {
  return (
    <input
      type="text"
      placeholder="Filter by name"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      style={{ margin: "10px", padding: "5px", width: "200px" }}
    />
  );
};

export default FilterBox;
