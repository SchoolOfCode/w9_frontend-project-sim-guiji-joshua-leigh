import Button from '../Button'

const HomePage = ({handleClick})=> {


  return (
    <div>
      <h1>HomePage</h1>
      
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

export default HomePage