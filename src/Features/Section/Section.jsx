import React, { Component } from "react";

export class Section extends Component {
  node = React.createRef();
  state = { entry: {}, observer: {} };

  componentDidMount() {
    const { current } = this.node;
    const { config = {} } = this.props;
    this.observer = new IntersectionObserver(([entry], observer) => {
      this.setState(() => ({
        entry,
        observer
      }));
    }, config);

    this.observer.observe(current);
  }
  componentWillUnmount() {
    const { current } = this.node;
    this.observer.unobserve(current);
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
