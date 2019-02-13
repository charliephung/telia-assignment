import React from "react";
import classnames from "classnames";
import "./Button.scss";

export default function index({
  className = "btn",
  addClass = "",
  children,
  ...rest
}) {
  const newClassName = classnames(className, addClass);
  return (
    <button className={newClassName} {...rest}>
      {children}
    </button>
  );
}
