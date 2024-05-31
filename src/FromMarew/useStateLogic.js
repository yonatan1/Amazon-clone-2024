import React from "react";

function useStateLogic(inv) {
  let initialState = inv;
  function setstate(values) {
    initialState = values;

    return initialState;
  }
  return [initialState, setstate];
}
[data, setdata] = useStateLogic("aberesha");


