import React, { Component } from 'react';

export default class ColorBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
       <div className="color-box" style={{opacity: this.props.opacity}}>
        {(this.props.opacity >= 0.2) ? <ColorBox opacity={this.props.opacity - 0.1} />
      : null}
        </div>
    )
  }

}
