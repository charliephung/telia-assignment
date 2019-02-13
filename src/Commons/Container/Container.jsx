import React from "react";
import "./Container.scss";

export default function Container({ children, addClass = "", ...rest }) {
  return (
    <div className={"container " + addClass} {...rest}>
      {children}
    </div>
  );
}
