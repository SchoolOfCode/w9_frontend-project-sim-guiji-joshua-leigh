import Quote from '../Quote'
import BurgerMenu from '../BurgerMenu'

const LandingPage = ({handleClick})=> {


  return (
    <div className='landing-page'>
      <BurgerMenu handleClick={handleClick}/>
      <h1>LandingPage</h1>

      <Quote className={`feelGoodQuote`} text={`feelGoodQuote`}></Quote>

      <Quote className={`dailyQuote`} text={`dailyQuote`}></Quote>

    </div>
  )

}

export default LandingPage