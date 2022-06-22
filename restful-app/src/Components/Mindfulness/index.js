import React from "react";
import BurgerMenu from "../BurgerMenu/index.js"
import "./styles.css";
const Mindfulness = ({handleClick})=> {


  return (
    <div className="mindfulness-page">
      <h1 className="mindfulness-title">Mindfulness</h1>

      <BurgerMenu handleClick={handleClick}/>
      <div className="pulse">
        
      </div>
    </div>
  )

}

export default Mindfulness