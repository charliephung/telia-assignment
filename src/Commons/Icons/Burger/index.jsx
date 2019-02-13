import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import "./Burger.scss";

export class Burger extends Component {
  state = { open: true };

  isControlled() {
    return this.props.open !== undefined;
  }
  onClick = () => {
    this.setState(state => ({
      open: !state.open
    }));
  };
  render() {
    const { open, onChange, className="burger", addClass, ...rest } = this.props;
    const isOpen = this.isControlled() ? open : this.state.open;
    const handleClick = this.isControlled()
      ? () => onChange(isOpen)
      : this.onClick;
    const stackClass = isOpen ? `burger-stack active ` : `burger-stack`;
    const newClassName = classnames(className, addClass);

    return (
      <div {...rest} onClick={handleClick} className={newClassName}>
        <div
          style={{
            backgroundColor: this.props.backgroundcolor || "",
            width: this.props.width || "",
            height: this.props.height || ""
          }}
          className={stackClass}
        />
      </div>
    );
  }
}

Burger.defaultProps = {
  onChange: () => {},
  addClass: "",
  backgroundcolor: "#b246ea"
};
Burger.propTypes = {
  onChange: PropTypes.func,
  open: PropTypes.bool,
  addClass: PropTypes.string,
  backgroundcolor: PropTypes.string
};

export default Burger;
