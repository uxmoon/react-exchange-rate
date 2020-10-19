import React, { Component } from 'react';
import './Rates.scss';
import RatesItem from './RatesItem';

class Rates extends Component {
  /* generate country code based on currency name */
  setFlag = (countryCode) => {
    return countryCode.slice(0, 2).toLowerCase();
  };

  /* set 6 digits after decimal point */
  setDigits = (num) => {
    // return num.toFixed(6)
    if (num === 1) {
      return num.toFixed();
    } else {
      return num.toFixed(6);
    }
  };

  createRates = () => {
    const rates = this.props.rates;
    const defaultCurrencies = ['CAD', 'GBP', 'USD', 'EUR'];
    const items = [];

    for (let key in rates) {
      if (rates.hasOwnProperty(key) && defaultCurrencies.includes(key)) {
        // console.log(`currency: ${key}, rate: ${rates[key]} `)
        items.push(
          <RatesItem
            key={key}
            flag={this.setFlag(key)}
            currency={key}
            num={this.setDigits(rates[key])}
          />
        );
      }
    }

    return items;
  };

  render() {
    return (
      <div className="Rates">
        {this.props.loader ? this.createRates() : 'Cargando cotizaciones...'}
      </div>
    );
  }
}

export default Rates;
