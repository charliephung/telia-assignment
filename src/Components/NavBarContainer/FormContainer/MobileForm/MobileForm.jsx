import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Button from "Commons/Button";
import classnames from "classnames";
import "./MobileForm.scss";

export class MobileForm extends PureComponent {
  render() {
    const {
      className = "mobile-form box-shadow-3",
      addClass = "",
      language,
      ...rest
    } = this.props;
    const newClassName = classnames(className, addClass);
    return (
      <form className={newClassName} {...rest}>
        <input
          placeholder={language.inputPlaceholder1}
          className="mobile-form__input"
        />
        <Button addClass={classnames("btn--green", "color-white-1")}>
          {language.button1} &#10095;
        </Button>
      </form>
    );
  }
}

MobileForm.propTypes = {
  addClass: PropTypes.string,
  className: PropTypes.string,
  language: PropTypes.object
};

export default MobileForm;
