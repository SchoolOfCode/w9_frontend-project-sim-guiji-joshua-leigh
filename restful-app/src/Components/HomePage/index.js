import BurgerMenu from "../BurgerMenu";
import LavaLamp from '../LandingPage/LavalampBackground/LavalampBackground';
import './styles.css';

const HomePage = ({handleClick})=> {


  return (
    <div className='home-page' >
      <h1 className="title-home">HomePage</h1>
      <LavaLamp />
      <BurgerMenu handleClick={handleClick}/>
      
    </div>
  )

}

export default HomePage