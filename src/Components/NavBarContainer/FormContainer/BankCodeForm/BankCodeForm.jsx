import React from "react";
import PropTypes from "prop-types";
import Button from "Commons/Button";
import classnames from "classnames";

const BankCodeForm = React.memo(function({ language, ...props }) {
  return (
    <form {...props}>
      <Button addClass={classnames("btn--green", "color-white-1")}>
        {language.button3} &#10095;
      </Button>
    </form>
  );
});

BankCodeForm.propTypes = {
  language: PropTypes.object
};
export default BankCodeForm;
