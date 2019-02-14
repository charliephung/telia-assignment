import React from "react";
import PropTypes from "prop-types";
import Button from "Commons/Button";
import classnames from "classnames";
import "./ShoppingCart.scss";

const ShoppingCart = React.memo(function({ onCloseClick, ...rest }) {
  return (
    <div {...rest} className="shopping-cart box-shadow-3">
      <div className="shopping-cart__heading">
        <h2>SHOPPING BASKET</h2>
        <p>There are 0 items in your shopping cart</p>
        <span onClick={onCloseClick} className="shopping-cart__close">
          X
        </span>
      </div>
      <div className="shopping-cart__body">
        <Button addClass={classnames("btn--green", "color-white-1")}>
          PROCEED TO CHECKOUT
        </Button>
      </div>
    </div>
  );
});

ShoppingCart.propTypes = {};
ShoppingCart.defaultProps = {};
export default ShoppingCart;
