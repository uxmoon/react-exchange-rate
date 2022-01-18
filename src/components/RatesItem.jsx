import React, { Component } from "react";
import ReactCountryFlag from "react-country-flag";

class RatesItem extends Component {
  render() {
    return (
      <div className="Rates-item">
        <div>
          <span>
            <ReactCountryFlag countryCode={this.props.flag} svg />
          </span>
        </div>
        <div>{this.props.currency}</div>
        <div>{this.props.num}</div>
      </div>
    );
  }
}

export default RatesItem;
