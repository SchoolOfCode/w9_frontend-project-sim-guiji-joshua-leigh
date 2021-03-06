import React, { useState } from 'react';
import './index.css';
import {/*useState,*/ useReducer, useEffect} from 'react'

//import components
import LandingPage from '../LandingPage'
import HomePage from '../HomePage'
import Mindfulness from '../Mindfulness'



//initial state to be used in useReducer
const initialState = `LandingPage`
//state changes 
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
  
  //userReducer 
  const [pageState, dispatch] = useReducer(reducer, initialState);
  const [quotes, setQuotes] = useState({})
  useEffect(()=>{
    fetch('http://localhost:3001/users')
    .then(res=>res.json())
    .then(data=>setQuotes(data));

  },[])

  
    //conditional formatting for each component based on state set by useReducer
    if(pageState === `LandingPage`) {
    return (
      <div className="App">
        <LandingPage handleClick={dispatch} quotes={quotes}/>
      </div>
    );
  }
  if(pageState === `HomePage`) {
    return (
      <div className="App">
        <HomePage handleClick={dispatch}/>
      </div>
    );
  }
  if(pageState === `Mindfulness`) {
    return (
      <div className="App">
        <Mindfulness handleClick={dispatch}/>
      </div>
    );
  }

} 



export default App;
