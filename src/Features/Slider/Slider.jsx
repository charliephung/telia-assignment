import React from "react";
import "./Slider.scss";
const Slider = React.memo(function({
  children,
  addClass = "",
  showSlide = 0
}) {
  return (
    <div className={"slider " + addClass}>
      <div style={{ marginLeft: `-${100 * showSlide}%` }} className="slides">
        {React.Children.map(children, child => (
          <div className={"slide " + addClass} >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Slider;
