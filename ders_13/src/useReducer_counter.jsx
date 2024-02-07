import React, { useReducer } from 'react';

// Azaltıcı fonksiyon
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  // useReducer kullanımı
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>Counter</h1>
      <p>Sayacın değeri: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Arttır</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Azalt</button>
    </div>
  );
};

export default Counter;
