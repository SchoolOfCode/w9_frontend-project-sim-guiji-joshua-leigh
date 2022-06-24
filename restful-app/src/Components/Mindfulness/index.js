import React from "react";
import BurgerMenu from "../BurgerMenu/index.js"
import "./styles.css";


const Mindfulness = ({handleClick})=> {
  return (

    <div className="mindfulness-page">
      <BurgerMenu handleClick={handleClick}/>

      <h1 className="mindfulness-title">Guided Breathing</h1>


      <div className="pulse">

      </div>

    </div>
  )
}

export default Mindfulness