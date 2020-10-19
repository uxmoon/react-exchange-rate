import React, { Component } from 'react';
import './App.scss';
import './Form.scss';
import Rates from './components/Rates';
import Button from './components/Button';
import API from './api/exchangerate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rates: {},
      currencyBase: '',
      currencyDate: ''
    };
  }

  async componentDidMount() {
    // API.get('/latest?base=USD')
    // .then((response) => {
    //   console.log(response.data.rates)
    // })

    let response = await API.get('/latest?base=USD');
    // console.log(response.data.rates);
    this.setState({ rates: response.data.rates });
    // console.log(this.state.rates);
  }

  handleCurrency = (evt) => {
    console.log(evt.target.value);
    this.setState({currencyBase: evt.target.value})
  };

  handleDate = (evt) => {
    console.log(evt.target.value);
    this.setState({currencyDate: evt.target.value})
  };

  handleSubmit = (evt) => {
    console.log('Submit form')
    evt.preventDefault();
    console.log('currency and date:', this.state.currencyBase, this.state.currencyDate)
  }

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <div className="App-container">
          <h1 className="App-title">Histórico de cotizaciones</h1>

          <form className="Form" onSubmit={this.handleSubmit}>
            <div className="Form-field">
              <label htmlFor="currency">
                Selecciona la moneda de referencia
              </label>
              <div className="Form-select">
                <select id="currency" onChange={this.handleCurrency}>
                  <option value="USD">USD - Dólar americano</option>
                  <option value="CAD">CAD - Dólar canadiense</option>
                  <option value="GBP">GBP - Libras esterlinas</option>
                  <option value="EUR">EUR - Euro</option>
                </select>
              </div>
            </div>

            <div className="Form-field">
              <label htmlFor="date">Ingresá la fecha de cotización</label>
              <input
                type="date"
                id="date"
                onChange={this.handleDate}
              />
            </div>

            <Button label="Buscar cotizaciones" color="primary" />
          </form>

          <Rates rates={this.state.rates} />

          <div>
            <Button label="Ver más cotizaciones" color="secondary" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
