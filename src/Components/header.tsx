import React from "react";
import "../Styles/header.css";

function header() {
  return (
    <>
      <div className="flex-header">
        <p className="header">
          {" "}
          TODO <span style={{ color: "black" }}>LIST</span>
        </p>
      </div>
    </>
  );
}

export default header;
