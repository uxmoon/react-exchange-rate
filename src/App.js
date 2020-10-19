import React, { Component } from 'react';
import './App.scss';
import './Form.scss';
import './Rates.scss';
import Button from './components/Button';
import API from './api/exchangerate';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rates: {}
    }
  }

  async componentDidMount() {
    // API.get('/latest?base=USD')
    // .then((response) => {
    //   console.log(response.data.rates)
    // })

    let response = await API.get('/latest?base=USD');
    // console.log(response.data.rates);
    this.setState({rates: response.data.rates});
    // console.log(this.state.rates);
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="App-container">
          <h1 className="App-title">Histórico de cotizaciones</h1>

          <form className="Form">
            <div className="Form-field">
              <label htmlFor="currency">
                Selecciona la moneda de referencia
              </label>
              <div className="Form-select">
                <select id="currency">
                  <option value="">Moneda</option>
                  <option value="">Moneda</option>
                  <option value="">Moneda</option>
                  <option value="">Moneda</option>
                </select>
              </div>
            </div>

            <div className="Form-field">
              <label htmlFor="date">Ingresá la fecha de cotización</label>
              <input type="text" placeholder="DD / MM / YYYY" id="date" />
            </div>

            <Button label="Buscar cotizaciones" color="primary" />
          </form>

          <div className="Rates">
            <div className="Rates-item">
              <div>flag</div>
              <div>Moneda</div>
              <div>Valor</div>
            </div>
            <div className="Rates-item">
              <div>flag</div>
              <div>Moneda</div>
              <div>Valor</div>
            </div>
            <div className="Rates-item">
              <div>flag</div>
              <div>Moneda</div>
              <div>Valor</div>
            </div>
            <div className="Rates-item">
              <div>flag</div>
              <div>Moneda</div>
              <div>Valor</div>
            </div>
          </div>

          <div>
            <Button label="Ver más cotizaciones" color="secondary" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
