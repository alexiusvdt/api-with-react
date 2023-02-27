// just for learning about usereducer
import React, { useState, useEffect, useReducer } from 'react';

//initialize state here or use a default paaram  in the reducer arg declaration
const initialState = {
  counter: 0
}

//create a func with a state and action arg
// if initializing state here it would be:
// function reducer(state = {counter: 0}, action)
function reducer(state, action) {
  //create branching logic on what to do with state including error checks
  switch (action.type){
    case 'increment':
      return {
        //state is now 
        counter: state.counter + 1
      };
      default:
        throw new Error(`There is no matching ${action.type}!`);
    }
}


function Counter() {
  //instead of calling useState, useReducer with the appropriate args
  const [counter, setCounter] = useReducer(reducer, initialState);
  const [hidden, setHidden] = useState(false);


  useEffect(() => {
    //now we have to reference state here as it's in the reducer
    document.title = state.counter;
  }, [counter]);

  return (
    <React.Fragment>
      {hidden ? <h1>Count Hidden</h1> : <h1>{state.counter}</h1>}
      {/* now instead of telling it what to do here, we feed the action to the reducer switch case */}
      <button onClick={() => dispatch({type: increment})}>Count!</button>
      <button onClick={() => setHidden(!hidden)}>Hide/Show</button>
    </React.Fragment>
  );
}

export default Counter;