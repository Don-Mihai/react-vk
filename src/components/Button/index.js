import { useState } from 'react';
import './Button.scss';

const Button = ({name, isVisibleIcon}) => {
    const [isClicked, setIsClicked] = useState(false)
    const [number, setNumber] = useState(0)

    const handleClickButton = () => {
        setIsClicked(!isClicked)
        setNumber(number + 1)
    }

    return (
        <button className="component-button" onClick={handleClickButton} >
            {name}
            {number}
            {isVisibleIcon ? <img className={`component-button__icon ${isClicked ? 'active' : ''}`} src="/arrow.png" /> : '' }
        </button>
    );
};

export default Button;
