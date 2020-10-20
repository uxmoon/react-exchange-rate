import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    // this.myRef = React.createRef();
    this.state = {
      base: '',
      date: '',
    };
  }


  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.action(this.state);
    // this.setState({ base: "", date: "" });
    console.log("State on form submit", this.state);
  };

  render() {
    // console.log('form comp', this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="base">Configurar Moneda, ej: CAD</label>
        </div>
        <input
          id="base"
          name="base"
          value={this.state.base}
          onChange={this.handleChange}
        />
        <div>
          <label htmlFor="date">Configurar fecha, ej: 2019-01-01</label>
        </div>
        <input
          id="date"
          name="date"
          value={this.state.date}
          onChange={this.handleChange}
        />
        <div>
          <button>Configurar moneda</button>
        </div>
      </form>
    );
  }
}

export default Form;
