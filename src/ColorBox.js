import React, { Component } from "react";

export default class ColorBox extends Component {
  render() {
    const checkedOpacity = this.props.opacity.toFixed(1);

    console.log(this.props.opacity.toFixed(1));

    if (checkedOpacity >= 0.2)
      return (
        <div className="color-box" style={{ opacity: 1 }}>
          <ColorBox opacity={checkedOpacity - 0.1} />
        </div>
      );
    else {
      return null;
    }
  }
}
