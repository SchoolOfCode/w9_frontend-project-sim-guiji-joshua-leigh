import BurgerMenu from "../BurgerMenu"

const HomePage = ({handleClick})=> {


  return (
    <div className='home-page'>
      <h1>HomePage</h1>
      
      <BurgerMenu handleClick={handleClick}/>
      
    </div>
  )

}

export default HomePage