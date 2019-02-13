import React from "react";
import Search from "Commons/Icons/Search";
import "./SearchBox.scss";

export default function SearchBox() {
  return (
    <div className="searchbox">
      <div className="searchbox-contain">
        <input placeholder="Search" className="searchbox-input" />
        <span className="searchbox-button">
          <Search className="searchbox-icon" />
        </span>
      </div>
    </div>
  );
}
