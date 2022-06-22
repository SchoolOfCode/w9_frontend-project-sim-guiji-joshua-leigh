import Quote from '../Quote';
import BurgerMenu from '../BurgerMenu';
import LavaLamp from './LavalampBackground/LavalampBackground';


const LandingPage = ({handleClick})=> {


  return (
    <div className='landing-page'>
      <BurgerMenu handleClick={handleClick}/>
      <h1 className='title-landing'>RESTFUL</h1>
      <Quote className={`feelGoodQuote`} text={`feelGoodQuote`}></Quote>
      <Quote className={`dailyQuote`} text={`dailyQuote`}></Quote>
      <LavaLamp />


    </div>
  )

}

export default LandingPage