import React from "react";
import styles from "./Header.module.scss";

export default function Header({ setFilter }) {
  function handleFilterClick(filter) {
    setFilter(filter);
  }

  return (
    <div className="header">
      <h1 style={{ color: "orange" }}>NBA</h1>
      <div className="buttons">
        <button
          onClick={() => handleFilterClick("EAST")}
          className="btn"
          style={{ backgroundColor: "orange" }}
        >
          East
        </button>
        <button
          onClick={() => handleFilterClick("West")}
          className="btn"
          style={{ backgroundColor: "orange" }}
        >
          West
        </button>
        <button
          onClick={() => handleFilterClick("ALL")}
          className="btn"
          style={{ backgroundColor: "orange" }}
        >
          All
        </button>
      </div>
    </div>
  );
}
