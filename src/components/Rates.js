import React, { Component } from 'react';
import './Rates.scss';
import RatesItem from './RatesItem';

class Rates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
    };
  }

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

  createRatesDefault = () => {
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

  createRates = () => {
    const rates = this.props.rates;
    const defaultCurrencies = ['CAD', 'GBP', 'USD', 'EUR'];
    const items = [];

    for (let key in rates) {
      if (rates.hasOwnProperty(key) && !defaultCurrencies.includes(key)) {
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

  componentDidUpdate() {
    let loader = this.props.loader;
    if(loader) {
      this.setState((prevState) => ({
        showMore: !prevState.showMore
      }))
    }
  }

  /* show more currencies */
  handleToggle = () => {
    console.log('show/hide currencies');
    this.setState((prevState) => ({
      showMore: !prevState.showMore,
    }));
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="Rates">
        {this.props.loader
          ? this.createRatesDefault() :
          <div className="Rates-loader">
            <p className="Rates-loader-text">
              Cargando cotizaciones
            </p>
            <div className="Rates-loader-animation"></div>
          </div>}

        <div className={`Rates-list ${this.state.showMore ? 'is-active' : ''}`}>
          {this.createRates() }
        </div>

        <button className="Button Button-secondary" onClick={this.handleToggle}>
          {this.state.showMore
            ? "Ocultar cotizaciones"
            : "Ver más cotizaciones"
          }
        </button>
      </div>
    );
  }
}

export default Rates;
