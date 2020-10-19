import React, { Component } from 'react';
import './Rates.scss';
import RatesItem from './RatesItem';

class Rates extends Component {

  createRates = () => {
    const rates = this.props.rates;
    const defaultCurrencies = ['CAD', 'GBP', 'USD', 'EUR'];
    const items = [];

    for(let key in rates) {
      if(rates.hasOwnProperty(key) && defaultCurrencies.includes(key)) {
        // console.log(`currency: ${key}, rate: ${rates[key]} `)
        items.push(
          <RatesItem flag={key} currency={key} num={rates[key]} />
        )
      }
    }

    return items;
  }

  render() {
    return (
      <div className="Rates">
        {this.createRates()}
      </div>
    );
  }
}

export default Rates;
