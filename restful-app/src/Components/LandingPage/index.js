import Quote from '../Quote';
import BurgerMenu from '../BurgerMenu';
import LavaLamp from './LavalampBackground/LavalampBackground';
import { useState, useEffect } from 'react';


const LandingPage = ({handleClick, quotes})=> {


console.log('landing page', quotes)
  const [round, setRound] = useState(0);
  /*
    Different ways of checking if data exists before trying to access it, so that the application does not crash.
    quotes?.payload?.[0]?.quote === known as optional chaining - checks if the property is true
    quotes.payload && quotes.payload[0].quote
    quotes.payload ? quotes.payload[0].quote: "Hello  world"
  */
  return (
    <div className='landing-page' data-testid="landing-page">
      <BurgerMenu handleClick={handleClick}/>
      <h1 className='title-landing'>RESTFUL</h1>
      <Quote className={`feelGoodQuote`} text={quotes.payload ? quotes.payload[0].quote: "Loading"}></Quote>
      {/* <Quote className={`dailyQuote`} text={`dailyQuote`}></Quote> */}
      <LavaLamp />


    </div>
  )

}

export default LandingPage