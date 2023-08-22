import React from 'react'
import { useReducer } from 'react'

export const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement"
}

const initialState = { count: 0 };

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + payload };
    case ACTIONS.DECREMENT:
      return { count: state.count - payload };
    default:
      return state;
  }
};

export default function UseReducerComponent() {
  const [{ count }, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>Increment by 1</button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>Decrement by 1</button>
      <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>Increment by 5</button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 5 })}>Decrement by 5</button>
    </div>
  )
}
