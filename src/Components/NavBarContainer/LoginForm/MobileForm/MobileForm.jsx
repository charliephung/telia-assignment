import React from "react";
import Button from "Commons/Button";
import classnames from "classnames";
import "./MobileForm.scss";

export default function MoblieForm({className="mobile-form", addClass, ...rest}) {
  const newClassName = classnames(className, addClass);
  return (
    <div className={newClassName} {...rest}>
      <input className="mobile-form__input" />
      <Button addClass={classnames("btn--green", "color-white-1")}>
        LOGIN &#10095;
      </Button>
    </div>
  );
}
