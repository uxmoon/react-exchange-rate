import React, { Component } from 'react';
import './Form.scss';
import Button from './Button';
import dayjsUtils from '@date-io/dayjs';
import dayjsLocale from 'dayjs/locale/es';
import dayjs from 'dayjs';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base: 'USD',
      date: dayjs().format('YYYY-MM-DD')
    };
  }

  /* Currency base - update value on dropdown selection  */
  handleBase = (evt) => {
    // console.log(evt.target.value);
    if (evt.target.value) {
      this.setState({ base: evt.target.value });
    }
  };

  /* Currency date - update value on Datepicker selection */
  handleDate = (date) => {
    this.setState({
      date: date.format('YYYY-MM-DD'),
    });
  };

  /* call method from parent component on form submit */
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.action(this.state);
  };

  // componentDidMount() {
  //   console.log(this.state)
  // }
  // componentDidUpdate() {
  //   console.log(this.state);
  // }

  createRates = () => {
    const currencyNames = {
      CAD: 'Dólar Canadiense',
      HKD: 'Dólar Hong Kong',
      ISK: 'Corona Islandesa',
      PHP: 'Peso Filipino',
      DKK: 'Corona Danesa',
      HUF: 'Forinto',
      CZK: 'Corona Checa',
      GBP: 'Libra Esterlina',
      RON: 'Leu Rumano',
      SEK: 'Corona Sueca',
      IDR: 'Rupia Indonesia',
      INR: 'Rupia India',
      BRL: 'Real Brasileño',
      RUB: 'Rublo',
      HRK: 'Kruna Croata',
      JPY: 'Yen',
      THB: 'Bat Tailandés',
      CHF: 'Franco Suizo',
      EUR: 'Euro',
      MYR: 'Ringit',
      BGN: 'Leva Búlgaro',
      TRY: 'Lira Turca',
      CNY: 'Yuan',
      NOK: 'Corona Noruega',
      NZD: 'Dólar de Nueva Zelanda',
      ZAR: 'Rand',
      USD: 'Dólar estadounidense',
      MXN: 'Peso Mexicano',
      SGD: 'Dólar singapurense',
      AUD: 'Dólar australiano',
      ILS: 'Nuevo séquel',
      KRW: 'Won surcoreano',
      PLN: 'Zloty',
    };

    const rates = this.props.rates;
    const items = [];

    for (let key in rates) {
      if (rates.hasOwnProperty(key) && currencyNames.hasOwnProperty(key)) {
        items.push(
          <option value={key} key={key}>
            {currencyNames[key]} ({key})
          </option>
        );
      }
    }

    return items;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="Form">
        <div className="Form-field">
          <label htmlFor="base">Selecciona la moneda de referencia</label>
          <div className="Form-select">
            <select id="moneda" name="moneda" onChange={this.handleBase}>
              <option value="" defaultValue>
                Seleccionar moneda
              </option>
              {this.createRates()}
            </select>
          </div>
        </div>
        <div className="Form-field">
          <label htmlFor="date">Ingresá la fecha de cotización</label>
          <MuiPickersUtilsProvider locale={dayjsLocale} utils={dayjsUtils}>
            <KeyboardDatePicker
              // variant="inline"
              value={this.state.date}
              onChange={this.handleDate}
              minDate="1999-01-01"
              format="DD/MM/YYYY"
              disableFuture
              cancelLabel="Cancelar"
            />
          </MuiPickersUtilsProvider>
        </div>
        <Button label="Buscar cotizaciones" color="primary" />
      </form>
    );
  }
}

export default Form;
