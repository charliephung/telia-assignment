import React from "react";
import PropTypes from "prop-types";
import Button from "Commons/Button";
import classnames from "classnames";
import "./ShoppingCart.scss";

const ShoppingCart = React.memo(function({ language, onCloseClick, ...rest }) {
  const display = language.shopping;
  return (
    <div {...rest} className="shopping-cart box-shadow-3">
      <div className="shopping-cart__heading">
        <h2>{display.heading0}</h2>
        <p>{display.info0}</p>
        <span onClick={onCloseClick} className="shopping-cart__close">
          X
        </span>
      </div>
      <div className="shopping-cart__body">
        <Button addClass={classnames("btn--green", "color-white-1")}>
          {display.button0}
        </Button>
      </div>
    </div>
  );
});

ShoppingCart.propTypes = {
  language: PropTypes.object,
  onCloseClick: PropTypes.func
};
export default ShoppingCart;
