import React, { Component } from 'react';
import './Form.scss';
import Button from './Button';
import dayjsUtils from '@date-io/dayjs';
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
    this.setState({ base: evt.target.value });
  };

  /* Currency date - update value on Datepicker selection */
  handleDate = (date) => {
    this.setState({
      date: date.format('YYYY-MM-DD'),
    }, () => {
      console.log(this.state);
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

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="Form">
        <div className="Form-field">
          <label htmlFor="base">Selecciona la moneda de referencia</label>
          <div className="Form-select">
          <select id="moneda" name="moneda" onChange={this.handleBase}>
            <option value="USD">USD - Dólar americano</option>
            <option value="CAD">CAD - Dólar canadiense</option>
            <option value="GBP">GBP - Libras esterlinas</option>
            <option value="EUR">EUR - Euro</option>
          </select>
          </div>
        </div>
        <div className="Form-field">
          <label htmlFor="date">Ingresá la fecha de cotización</label>
          <MuiPickersUtilsProvider utils={dayjsUtils}>
            <KeyboardDatePicker
              value={this.state.date}
              onChange={this.handleDate}
              minDate="1999-01-01"
              format="DD/MM/YYYY"
              disableFuture
            />
          </MuiPickersUtilsProvider>
        </div>
        <Button label="Buscar cotizaciones" color="primary" />
      </form>
    );
  }
}

export default Form;
