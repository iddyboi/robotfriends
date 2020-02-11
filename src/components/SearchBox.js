import React from "react";

export default function SearchBox({ searchChange }) {
  return (
    <div className="pa2">
      <input
        className="true"
        type="search"
        name=""
        id=""
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
}
