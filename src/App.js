import React, { Component } from 'react';
import './App.scss';
import Rates from './components/Rates';
import Button from './components/Button';
import Form from './components/Form';
import API from './api/exchangerate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rates: {},
      // currencyBase: 'USD',
      // currencyDate: 'latest',
      isLoaded: false,
      currency: {
        base: 'USD',
        date: 'latest',
      },
    };
  }

  async componentDidMount() {
    // API.get('/latest?base=USD')
    // .then((response) => {
    //   console.log(response.data.rates)
    // })

    // let response = await API.get('/latest?base=USD');
    let response = await API.get(
      `/${this.state.currency.date}?base=${this.state.currency.base}`
    );
    // console.log(response.data.rates);
    this.setState({ rates: response.data.rates, isLoaded: true });
    // console.log(this.state.rates);
    console.log(this.state);
  }

  /* custom method to update currency */
  setCurrency = (items) => {
    this.setState((prevState) => ({
      currency: {
        ...prevState.currency,
        ...items,
      },
    }));

  };

  componentDidUpdate() {
    console.log('component updated', this.state)
  }

  /* update state on currency selection */
  // handleCurrency = (evt) => {
  //   console.log(evt.target.value);
  //   this.setState({ currencyBase: evt.target.value });
  //   console.log(this.state);
  // };

  /* update state on date selection */
  // handleDate = (evt) => {
  //   console.log(evt.target.value);
  //   this.setState({ currencyDate: evt.target.value });
  // };

  /* Form submit, fetch new rates with date and currency selections */
  // handleSubmit = async (evt) => {
  //   evt.preventDefault();

  //   console.log('Submit form');
  //   console.log(
  //     'currency and date:',
  //     this.state.currencyBase,
  //     this.state.currencyDate
  //   );

  //   this.setState({ isLoaded: false });

  //   let response = await API.get(
  //     `/${this.state.currencyDate}?base=${this.state.currencyBase}`
  //   );

  //   setTimeout(
  //     function () {
  //       this.setState({ rates: response.data.rates, isLoaded: true });
  //     }.bind(this),
  //     1000
  //   );
  //   console.log(this.state.rates);
  // };

  // renderItems = () => {
  //   return (
  //     <ul>
  //     {this.state.currency.map(item => (
  //       <li key="1">
  //         Base: {item.base},
  //         Date: {item.date}
  //       </li>
  //       ))}
  //     </ul>
  //   )
  // }

  render() {
    return (
      <div className="App">
        <div className="App-container">
          <h1 className="App-title">Histórico de cotizaciones</h1>
          {/* this.renderItems() */}

          <Form action={this.setCurrency} />

          {/* <form className="Form" onSubmit={this.handleSubmit}>
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
              <input type="date" id="date" onChange={this.handleDate} />
            </div>

            <Button label="Buscar cotizaciones" color="primary" />
          </form> */}

          <Rates rates={this.state.rates} loader={this.state.isLoaded} />

          <div>
            <Button label="Ver más cotizaciones" color="secondary" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
