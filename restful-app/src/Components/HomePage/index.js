import React from "react";
import BurgerMenu from "../BurgerMenu/index.js";
import LavaLamp from '../LandingPage/LavalampBackground/LavalampBackground';
import './styles.css';

const HomePage = ({handleClick})=> {
  return (

    <div className="home-page" >
      <BurgerMenu handleClick={handleClick}/>

      <h1 className="title-home">HomePage</h1>


      <LavaLamp />
      
    </div>
  )
}

export default HomePage