import React from "react";
import Button from "Commons/Button";
import classnames from "classnames";

const BankCodeForm = React.memo(function(props) {
  return (
    <form {...props}>
      <Button addClass={classnames("btn--green", "color-white-1")}>
        LOGIN WITH BANKING CODES &#10095;
      </Button>
    </form>
  );
});

export default BankCodeForm;
