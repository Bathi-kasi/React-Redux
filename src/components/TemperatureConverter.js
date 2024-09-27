import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TemperatureConverter = () => {
  const dispatch = useDispatch();
  const celsius = useSelector((state) => state.celsius);
  const fahrenheit = useSelector((state) => state.fahrenheit);

  return (
    <div>
      <div>
        <input
          type="number"
          value={celsius}
          onChange={(e) => dispatch({ type: 'SET_CELSIUS', payload: e.target.value })}
          placeholder="Celsius"
        />
        <span>°C</span>
      </div>
      <div>
        <input
          type="number"
          value={fahrenheit}
          onChange={(e) => dispatch({ type: 'SET_FAHRENHEIT', payload: e.target.value })}
          placeholder="Fahrenheit"
        />
        <span>°F</span>
      </div>
    </div>
  );
};

export default TemperatureConverter;
