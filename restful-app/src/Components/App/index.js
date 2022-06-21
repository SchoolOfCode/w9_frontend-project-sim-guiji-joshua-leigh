import React from 'react';
import './index.css';
import {useState, useReducer} from 'react'

const initialState = `HomePage`

const reducer = (state, action)=> {
  console.log(action)
  switch(action) {
    case `LandingPage`:
      return `LandingPage`;
    case `HomePage`:
      return `HomePage`;
    case "Mindfulness":
      return `Mindfulness`;
    default:
      return state

  }
}

function App() {
  
  const [pageState, dispatch] = useReducer(reducer, initialState);
  
  
  {
    if(pageState === `LandingPage`) {
    return (
      <div className="App">
        <h1>LandingPage</h1>
        <button onClick={()=> dispatch(`LandingPage`)}>LandingPage</button>
        <button onClick={()=> dispatch(`HomePage`)}>HomePage</button>
        <button onClick={()=> dispatch(`Mindfulness`)}>Mindfulness</button>
      </div>
    );
  }
  if(pageState === `HomePage`) {
    return (
      <div className="App">
        <h1>Homepage</h1>
        <button onClick={()=> dispatch(`LandingPage`)}>LandingPage</button>
        <button onClick={()=> dispatch(`HomePage`)}>HomePage</button>
        <button onClick={()=> dispatch(`Mindfulness`)}>Mindfulness</button>
      </div>
    );
  }
  if(pageState === `Mindfulness`) {
    return (
      <div className="App">
        <h1>Mindfulness</h1>
        <button onClick={()=> dispatch(`LandingPage`)}>LandingPage</button>
        <button onClick={()=> dispatch(`HomePage`)}>HomePage</button>
        <button onClick={()=> dispatch(`Mindfulness`)}>Mindfulness</button>
      </div>
    );
  }

  } 

}

export default App;
