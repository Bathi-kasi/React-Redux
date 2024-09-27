const initialState = {
    celsius: '',
    fahrenheit: '',
  };
  
  const temperatureReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CELSIUS':
        return {
          ...state,
          celsius: action.payload,
          fahrenheit: (action.payload * 9) / 5 + 32,
        };
      case 'SET_FAHRENHEIT':
        return {
          ...state,
          fahrenheit: action.payload,
          celsius: ((action.payload - 32) * 5) / 9,
        };
      default:
        return state;
    }
  };
  
  export default temperatureReducer;
  