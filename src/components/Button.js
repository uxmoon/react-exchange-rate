import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    return (
      <div>
        <button
          className={`Button Button-${this.props.color}`}
          onClick={this.props.handleClick}
        >
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default Button;
