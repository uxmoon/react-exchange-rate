import React, { Component } from 'react';

class RatesItem extends Component {
  render() {
    return (
      <div className="Rates-item">
        {/* <div>{this.props.flag}</div> */}
        <div>
          <span>
          <img
            src={`https://www.countryflags.io/${this.props.flag}/flat/48.png`}
            alt=""
            aria-hidden="true"
          />
          </span>
        </div>
        <div>{this.props.currency}</div>
        <div>{this.props.num}</div>
      </div>
    );
  }
}

export default RatesItem;
