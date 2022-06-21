import {slide as Menu} from 'react-burger-menu'
import Button from '../Button';

const BurgerMenu = ({handleClick}) => {
    return (
        <button>
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
        </button>
      );
}

export default BurgerMenu