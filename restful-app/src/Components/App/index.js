import React from 'react';
import './index.css';
import {useState, useReducer, useEffect} from 'react'

//import components
import LandingPage from '../LandingPage'
import HomePage from '../HomePage'
import Mindfulness from '../Mindfulness'

//calling message from API
/*function CallApi() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []); 

  return (
    <div className="CallApi">
      <header className="CallApi-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}
*/

  

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
  //function CallApi() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []); 
  
    return (
      <div className="CallApi">
        <header className="CallApi-header">
          <p>{!data ? "Loading..." : data}</p>
        </header>
      </div>
    );
  }
  //userReducer 
  const [pageState, dispatch] = useReducer(reducer, initialState);
  
  
    //conditional formatting for each component based on state set by useReducer
    if(pageState === `LandingPage`) {
    return (<div>
        <LandingPage handleClick={dispatch}/>
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
