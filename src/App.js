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
      isLoaded: false,
      currency: {
        base: 'USD',
        date: 'latest',
      },
    };
  }

  /* get rates from API and update state */
  async componentDidMount() {
    let response = await API.get(
      `/${this.state.currency.date}?base=${this.state.currency.base}`
    );
    this.setState({ rates: response.data.rates, isLoaded: true });
    // console.log('component mounted', this.state);
  }

  /*
    - Update currency date and base from child component
    - Fetch new rates after state is updated
  */
  setCurrency = (items) => {
    this.setState((prevState) => ({
      currency: {
        ...prevState.currency,
        ...items,
      },
      isLoaded: false
    }), () => {
      // console.log('state was updated')
      this.setNewRates();
    });

  };

  /* Fetch new rates */
  setNewRates = async () => {
    let response = await API.get(
      `/${this.state.currency.date}?base=${this.state.currency.base}`
    );
    setTimeout(
      function() {
        this.setState({ rates: response.data.rates, isLoaded: true });
      }.bind(this),
      1000
    )
  };

  render() {
    return (
      <div className="App">
        <div className="App-container">
          <h1 className="App-title">Histórico de cotizaciones</h1>

          {/* pass setCurrency method as a prop */}
          {<Form action={this.setCurrency} />}

          {/* display default and updated rates */}
          {<Rates rates={this.state.rates} loader={this.state.isLoaded} />}

          {<Button label="Ver más cotizaciones" color="secondary" />}
        </div>
      </div>
    );
  }
}

export default App;
