import React, { Component } from "react";

const checkMobileEnv = () =>
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/webOS/i) ||
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPad/i) ||
  navigator.userAgent.match(/iPod/i) ||
  navigator.userAgent.match(/BlackBerry/i) ||
  navigator.userAgent.match(/Windows Phone/i);

export class Section extends Component {
  node = React.createRef();
  state = { entry: {}, observer: {}, env: null };

  componentDidMount() {
    const { current } = this.node;
    const { config = {} } = this.props;
    if (checkMobileEnv()) {
      this.setState(() => ({
        env: "mobile"
      }));
    } else {
      this.observer = new IntersectionObserver(([entry], observer) => {
        this.setState(() => ({
          entry,
          observer
        }));
      }, config);

      this.observer.observe(current);
    }
  }
  componentWillUnmount() {
    const { current } = this.node;
    if (this.observer) this.observer.unobserve(current);
  }

  render() {
    const children =
      typeof this.props.children === "function"
        ? this.props.children(this.state)
        : this.props.children;
    const { config, ...rest } = this.props;
    return (
      <div {...rest} ref={this.node}>
        {children}
      </div>
    );
  }
}

export default Section;
