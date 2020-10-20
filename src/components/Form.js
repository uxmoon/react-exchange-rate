import React, { Component } from 'react';
import './Form.scss';
import Button from './Button';
import dayjs from '@date-io/dayjs';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base: '',
      // date: ''
      date: new Date(),
      // date: dayjs('2019-01-25').format('DD/MM/YYYY')
    };
  }

  // dayjs('2019-01-25').format('DD/MM/YYYY') // '25/01/2019'

  /* handle form input fields and update state with new values  */
  handleBase = (evt) => {
    // console.log(evt.target.value);
    this.setState({ base: evt.target.value });
  };

  /* handleDate = (evt) => {
    // console.log(evt.target.value);
    this.setState({ date: evt.target.value });
  }; */

  handleDate = (date) => {
    this.setState({
      date: date,
    }, () => {
      let customDate = dayjs(this.state.date).format('DD/MM/YYYY');
      console.log(customDate)
    });

  };

  /* call method from parent component on form submit */
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.action(this.state);
  };

  render() {
    console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit} className="Form">
        <div className="Form-field">
          <label htmlFor="base">Selecciona la moneda de referencia</label>
          <select id="moneda" name="moneda" onChange={this.handleBase}>
            <option value="USD">USD - Dólar americano</option>
            <option value="CAD">CAD - Dólar canadiense</option>
            <option value="GBP">GBP - Libras esterlinas</option>
            <option value="EUR">EUR - Euro</option>
          </select>
        </div>
        <div className="Form-field">
          <label htmlFor="date">Ingresá la fecha de cotización</label>
          <MuiPickersUtilsProvider utils={dayjs}>
            <KeyboardDatePicker
              value={this.state.date}
              onChange={this.handleDate}
            />
          </MuiPickersUtilsProvider>
          {/* <input
            type="date"
            value={this.state.date}
            min="1999-01-01"
            max="2020-10-31"
            onChange={this.handleDate}
          /> */}
        </div>

        <Button label="Buscar cotizaciones" color="primary" />
      </form>
    );
  }
}

export default Form;
