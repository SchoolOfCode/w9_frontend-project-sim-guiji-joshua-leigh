import Button from '../Button'

const Mindfulness = ({handleClick})=> {


  return (
    <div>
      <h1>Mindfulness</h1>

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

    </div>
  )

}

export default Mindfulness