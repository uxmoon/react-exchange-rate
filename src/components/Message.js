import React, { Component } from 'react';
import './Message.scss';

class Message extends Component {
  render() {
    return (
      <div className={`Message ${this.props.color}`}>
        <div className="Message-body">{this.props.children}</div>
      </div>
    );
  }
}

export default Message;
