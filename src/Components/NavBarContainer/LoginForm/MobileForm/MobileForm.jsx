import React, { PureComponent } from "react";
import Button from "Commons/Button";
import classnames from "classnames";
import "./MobileForm.scss";

export class MobileForm extends PureComponent {
  render() {
    const { className = "mobile-form", addClass, ...rest } = this.props;
    const newClassName = classnames(className, addClass);
    return (
      <form className={newClassName} {...rest}>
        <input
          placeholder="Enter your phone number"
          className="mobile-form__input"
        />
        <Button addClass={classnames("btn--green", "color-white-1")}>
          LOGIN &#10095;
        </Button>
      </form>
    );
  }
}

export default MobileForm;
