import React, { Component } from "react";
import "./Burger.scss";

export class Burger extends Component {
  state = { isOpen: true };

  onClick = () => {
    const { onChange } = this.props;
    this.setState(
      state => ({
        isOpen: !state.isOpen
      }),
      () => {
        if (onChange) onChange(this.state.isOpen);
      }
    );
  };
  render() {
    const classname = this.state.isOpen
      ? "burger-stack"
      : "burger-stack active";
    return (
      <div {...this.props} onClick={this.onClick} className={`burger`}>
        <div
          style={{
            backgroundColor: this.props.backgroundColor || "",
            width: this.props.width || "",
            height: this.props.height || ""
          }}
          className={classname}
        />
      </div>
    );
  }
}

export default Burger;
