import React from "react";

export default function Pin(props) {
  return (
    <svg
      {...props}
      id="map-marker"
      viewBox="0 0 18 24"
      width="100%"
      height="100%"
    >
      <path
        d="M0 8.842A8.839 8.839 0 0 1 8.842 0a8.838 8.838 0 0 1 8.838 8.842C17.68 15.368 8.842 24 8.842 24S0 15.368 0 8.842zM8.842 4.42a4.422 4.422 0 0 0 0 8.842 4.422 4.422 0 0 0 0-8.842z"
        fill-rule="evenodd"
      />
    </svg>
  );
}
