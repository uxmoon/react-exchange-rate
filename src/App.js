import React, { Component } from 'react';
import './App.scss';
import Rates from './components/Rates';
import Form from './components/Form';
import Message from './components/Message';
import API from './api/exchangerate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rates: {},
      isLoaded: false,
      currency: {
        base: 'USDaa',
        date: 'latest',
      },
      errorMessage: '',
    };
  }

  /* get rates from API and update state */
  async componentDidMount() {
    try {
      let response = await API.get(
        `/${this.state.currency.date}?base=${this.state.currency.base}`
      );
      this.setState({ rates: response.data.rates, isLoaded: true });
      // console.log('component mounted', this.state);
    } catch (error) {
      this.setState({ errorMessage: error.message });
      console.log(error);
    }
  }

  /*
    - Update currency date and base from child component
    - Fetch new rates after state is updated
  */
  setCurrency = (items) => {
    this.setState({
      currency: items,
      isLoaded: false
    }, () => {
      this.setNewRates();
    })
  };

  /* Fetch new rates */
  setNewRates = async () => {
    let response = await API.get(
      `/${this.state.currency.date}?base=${this.state.currency.base}`
    );
    setTimeout(
      function () {
        this.setState({ rates: response.data.rates, isLoaded: true });
      }.bind(this),
      1000
    );
  };

  // componentDidUpdate() {
  //   console.log(this.state)
  // }

  render() {
    return (
      <div className="App">
        <div className="App-container">
          <h1 className="App-title">Histórico de cotizaciones</h1>

          {/* pass setCurrency method as a prop */}
          {<Form action={this.setCurrency} rates={this.state.rates} />}

          {/* display default and updated rates */}
          {this.state.errorMessage
            ? <Message color="is-danger">Ocurrió un error al obtener las cotizaciones. Intente mas tarde.</Message>
            : <Rates rates={this.state.rates} loader={this.state.isLoaded} />
          }
        </div>
      </div>
    );
  }
}

export default App;
