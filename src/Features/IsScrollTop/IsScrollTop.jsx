import React, { Component } from "react";

export class IsScrollTop extends Component {
  state = { isScrollTop: false };

  componentDidMount() {
    const { scrollTop } = document.documentElement;
    if (scrollTop === 0) this.setState(state => ({ isScrollTop: true }));

    this.onScroll = document.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { scrollTop } = document.documentElement;
    this.setState(({ isScrollTop }) => {
      if (!isScrollTop && scrollTop === 0) return { isScrollTop: true };
      if (isScrollTop && scrollTop !== 0) return { isScrollTop: false };
    });
  };

  componentWillUnmount() {
    document.removeEventListener(this.onScroll);
  }

  render() {
    const renderChildren =
      typeof this.props.children === "function"
        ? this.props.children(this.state)
        : React.cloneElement(this.props.children);

    return <> {renderChildren}</>;
  }
}

export default IsScrollTop;
