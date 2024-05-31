import { useState } from "react";

export default function UseReducerLogic(reducer, initial) {
  const [state, setState] = useState(initial);

  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [state, dispatch];
}

