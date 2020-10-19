import React from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div>
      <h1>Histórico de cotizaciones</h1>

      <form>
        <div>
          <label>Selecciona la moneda de referencia</label>
          <select>
            <option value="">Moneda</option>
            <option value="">Moneda</option>
            <option value="">Moneda</option>
            <option value="">Moneda</option>
          </select>
        </div>

        <div>
          <label>Ingresá la fecha de cotización</label>
          <input type="text" placeholder="DD / MM / YYYY" />
        </div>

        <button>Buscar cotizaciones</button>
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
        <button>Ver más cotizaciones</button>
        <Button label="Buscar cotizaciones" color="primary" />
        <Button label="Ver más cotizaciones" color="secondary" />
      </div>
    </div>
  );
}

export default App;
