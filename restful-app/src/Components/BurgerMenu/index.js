import {slide as Menu} from 'react-burger-menu'
import Button from '../Button';
import './styles.css';


const BurgerMenu = ({handleClick}) => {
    return (
      <div className='burger-menu'>
    
        
        <Menu>
       
          <Button 
            className={`HomePageButton`}
            text={`Home`}
            handleClick={handleClick}
            handleClickArgument={`HomePage`}
          />

          <Button 
            className={`MindfulnessButton`}
            text={`Guided Breathing`}
            handleClick={handleClick}
            handleClickArgument={`Mindfulness`}
          />
          
        </Menu>
        
      </div>
    );
  }

export default BurgerMenu
