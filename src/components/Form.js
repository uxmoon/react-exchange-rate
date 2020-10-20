import React, { Component } from 'react';
import './Form.scss';
import Button from './Button';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base: '',
      date: '',
    };
  }

  /* handle form input fields and update state with new values  */
  handleBase = (evt) => {
    // console.log(evt.target.value);
    this.setState({ base: evt.target.value });
  };

  handleDate = (evt) => {
    // console.log(evt.target.value);
    this.setState({ date: evt.target.value });
  };

  /* call method from parent component on form submit */
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.action(this.state);
  };

  render() {
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
          <input
            type="date"
            value={this.state.date}
            min="1999-01-01"
            max="2020-10-31"
            onChange={this.handleDate}
          />
        </div>

        <Button label="Buscar cotizaciones" color="primary" />
      </form>
    );
  }
}

export default Form;
