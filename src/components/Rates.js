import React, { Component } from 'react';
import './Rates.scss';
import RatesItem from './RatesItem';
import Button from './Button';

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

  createRatesDefault = (isDefault = false) => {
    const rates = this.props.rates;
    const defaultCurrencies = ['CAD', 'GBP', 'USD', 'EUR'];
    const items = [];

    for (let key in rates) {
      const setDefault = isDefault ? defaultCurrencies.includes(key) : !defaultCurrencies.includes(key);
      if (rates.hasOwnProperty(key) && setDefault) {
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

  /* show more currencies */
  handleToggle = () => {
    // console.log('show/hide currencies');
    this.setState((prevState) => ({
      showMore: !prevState.showMore,
    }));
  };

  /* Hide additional rates when fetching new rates */
  componentDidUpdate() {
    // console.log(this.state);
    if(this.props.loader !== true && this.state.showMore === true) {
      this.setState({showMore: false})
    }
  }

  render() {
    return (
      <div className="Rates">

        {/* Display default rates for USD, CAD, GBP and EUR */}
        {this.props.loader
          ? this.createRatesDefault(true) :
          <div className="Rates-loader">
            <p className="Rates-loader-text">
              Cargando cotizaciones
            </p>
            <div className="Rates-loader-animation"></div>
          </div>}

        {/* Display additional rates for all other currencies */}
        <div className={`Rates-list ${this.state.showMore ? 'is-active' : ''}`}>
          {this.createRatesDefault() }
        </div>

        {/* Toggle additional rates visibility */}
        <Button color="secondary" label={this.state.showMore
          ? "Ocultar cotizaciones"
          : "Ver más cotizaciones"
        } handleClick={this.handleToggle} />
      </div>
    );
  }
}

export default Rates;
