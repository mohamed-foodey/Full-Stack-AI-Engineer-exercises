import { useReducer } from "react";

const initialState = {
  countA: 0,
  countB: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "incrementA":
      return {
        ...state,
        countA: state.countA + 1,
      };

    case "decrementA":
      return {
        ...state,
        countA: state.countA - 1,
      };

    case "incrementB":
      return {
        ...state,
        countB: state.countB + 1,
      };

    case "decrementB":
      return {
        ...state,
        countB: state.countB - 1,
      };

    case "reset":
      return initialState;

    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Double Counter</h1>

      <h2>Counter A: {state.countA}</h2>
      <button onClick={() => dispatch({ type: "decrementA" })}>-A</button>
      <button onClick={() => dispatch({ type: "incrementA" })}>+A</button>

      <h2>Counter B: {state.countB}</h2>
      <button onClick={() => dispatch({ type: "decrementB" })}>-B</button>
      <button onClick={() => dispatch({ type: "incrementB" })}>+B</button>

      <br />
      <br />

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset both
      </button>
    </div>
  );
};

export default App;