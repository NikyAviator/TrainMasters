import { useState } from "react";

// A custom hook (created by us)
// usage:
// let [states,changeStates] = useStates(initialState) // /// where initialState is an object
//
// to change the state call:
// changeStates({..changed values })

export default function useStates(initialState = {}) {
  let [states, setStates] = useState(initialState);

  return [states, (changes) => setStates({ ...states, ...changes })];
}
