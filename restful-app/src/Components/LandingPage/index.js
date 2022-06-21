import Quote from '../Quote'
import Button from '../Button'

const LandingPage = ({handleClick})=> {


  return (
    <div>
      <h1>LandingPage</h1>

      <Button 
        className={`LandingPageButton`}
        text={`LandingPageButton`}
        handleClick={handleClick}
        handleClickArgument={`LandingPage`}
      />

      <Button 
        className={`HomePageButton`}
        text={`HomePageButton`}
        handleClick={handleClick}
        handleClickArgument={`HomePage`}
      />

      <Button 
        className={`MindfulnessButton`}
        text={`MindfulnessButton`}
        handleClick={handleClick}
        handleClickArgument={`Mindfulness`}
      />

      <Quote className={`feelGoodQuote`} text={`feelGoodQuote`}></Quote>

      <Quote className={`dailyQuote`} text={`dailyQuote`}></Quote>


    </div>
  )

}

export default LandingPage