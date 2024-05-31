import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { name: "abebe" };
    //   return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
function nameUpdater(state, action) {}
export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  //   console.log("dispatch", dispatch);

  return (
    <div>
      {/* Count: {state.count + " " + state.name} */}
      {console.log("state === ", state)}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
