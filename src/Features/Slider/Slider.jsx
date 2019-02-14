import React from "react";
import "./Slider.scss";
const Slider = React.memo(function({
  children,
  sliderStyle = {},
  showSlide = 0
}) {
  return (
    <div className="slider" style={sliderStyle}>
      <div style={{ marginLeft: `-${100 * showSlide}%` }} className="slides">
        {React.Children.map(children, child => (
          <div className="slide" style={sliderStyle}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Slider;
