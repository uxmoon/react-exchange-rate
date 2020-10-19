import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    return (
      <div>
        <button className={`Button Button-${this.props.color}`}>
          {this.props.label}
        </button>
      </div>
    );
  }
}

export default Button;
