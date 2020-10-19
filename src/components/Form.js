import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      currencyBase: '',
    };
  }

  handleChange = (evt) => {
    console.log('handle change', evt.target.name, evt.target.value);
    this.setState({ [evt.target.name]: evt.target.value });
  };

  // handleMoneda = (evt) => {
  //   console.log('Moneda seleccionada: ', evt.target.value);
  //   this.setState({moneda: evt.target.value})
  // };

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('moneda seleccionada', this.state.currencyBase);
    this.props.addMoneda(this.state);
    // this.props.addMoneda(this.state.moneda);
    // console.log('submit nueva moneda', this.state);
  };

  // handleClick = () => {
  //   console.log('handle click', this.myRef.current.value)
  //   let moneda = this.myRef.current.value
  //   this.setState({moneda: moneda})
  //   console.log(this.state)
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="moneda">Seleccionar fecha</label>
        {/* <select id="moneda" name="moneda" onChange={this.handleMoneda}> */}
        {/* <select id="moneda" name="moneda" ref={this.myRef}> */}
        {/* <select id="moneda" name="moneda" onChange={this.handleChange}>
          <option value="USD">USD - Dólar americano</option>
          <option value="CAD">CAD - Dólar canadiense</option>
          <option value="GBP">GBP - Libras esterlinas</option>
          <option value="EUR">EUR - Euro</option>
        </select> */}
        <input
          type="text"
          id="moneda"
          name="currencyBase"
          value={this.state.currencyBase}
          onChange={this.handleChange}
        />
        <div>
          {/* <button onClick={this.handleClick}>Nueva moneda</button> */}
          <button>Nueva moneda</button>
        </div>
      </form>
    );
  }
}

export default Form;
