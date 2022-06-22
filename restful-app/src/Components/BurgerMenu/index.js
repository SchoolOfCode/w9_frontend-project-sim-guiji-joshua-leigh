import {slide as Menu} from 'react-burger-menu'
import Button from '../Button';
import './styles.css';


const BurgerMenu = ({handleClick}) => {
    return (
      <div className='burger-menu'>
    
        
        <Menu>
       
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
          
        </Menu>
        
        </div>
      );
}

export default BurgerMenu
