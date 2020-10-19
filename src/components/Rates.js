import React, { Component } from 'react';
import './Rates.scss';
import RatesItem from './RatesItem';

class Rates extends Component {
  render() {
    return (
      <div className="Rates">
        <div className="Rates-item">
          <div>flag</div>
          <div>Moneda</div>
          <div>Valor</div>
        </div>
        <RatesItem />
      </div>
    );
  }
}

export default Rates;
