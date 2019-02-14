import React from "react";

function Loading() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div>
        <h1 style={{ color: "#b246ea" }}>Telia</h1>
        <h3>Loading...</h3>
      </div>
    </div>
  );
}

export default Loading;
