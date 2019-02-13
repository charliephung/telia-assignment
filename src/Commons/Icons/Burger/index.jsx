import React, { Component } from "react";
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
    const open = this.isControlled() ? this.props.open : this.state.open;
    const handleClick = this.isControlled()
      ? () => this.props.onChange(open)
      : this.onClick;
    const classname = open ? "burger-stack active" : "burger-stack";
    return (
      <div {...this.props} onClick={handleClick} className={`burger`}>
        <div
          style={{
            backgroundColor: this.props.backgroundcolor || "",
            width: this.props.width || "",
            height: this.props.height || ""
          }}
          className={classname}
        />
      </div>
    );
  }
}

Burger.defaultProps = {
  onChange: () => {}
};
Burger.propTypes = {
  onChange: PropTypes.func,
  open: PropTypes.bool
};

export default Burger;
