import React from 'react';
import './App.scss';
import './Form.scss';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <h1 className="App-title">Histórico de cotizaciones</h1>

        <form className="Form">
          <div className="Form-field">
            <label htmlFor="currency">Selecciona la moneda de referencia</label>
            <select id="currency">
              <option value="">Moneda</option>
              <option value="">Moneda</option>
              <option value="">Moneda</option>
              <option value="">Moneda</option>
            </select>
          </div>

          <div className="Form-field">
            <label htmlFor="date">Ingresá la fecha de cotización</label>
            <input type="text" placeholder="DD / MM / YYYY" id="date" />
          </div>

          <Button label="Buscar cotizaciones" color="primary" />
        </form>

        <div>
          <div>
            <div>flag</div>
            <div>Moneda</div>
            <div>Valor</div>
          </div>
          <div>
            <div>flag</div>
            <div>Moneda</div>
            <div>Valor</div>
          </div>
          <div>
            <div>flag</div>
            <div>Moneda</div>
            <div>Valor</div>
          </div>
          <div>
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

export default App;
