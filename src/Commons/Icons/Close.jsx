import React from "react";

export default function Close(props) {
  return (
    <svg
      {...props}
      id="delete"
      viewBox="0 0 700 700"
      width="100%"
      height="100%"
    >
      <title>delete</title>
      <path fill="none" d="M0 0h700v700H0z" />
      <path d="M432.49 350l87.19-87.19a58.33 58.33 0 1 0-82.49-82.5L350 267.5l-87.18-87.18a58.34 58.34 0 0 0-82.5 82.5L267.51 350l-87.19 87.19a58.33 58.33 0 0 0 82.5 82.49L350 432.49l87.19 87.19a58.33 58.33 0 1 0 82.49-82.49z" />
    </svg>
  );
}
