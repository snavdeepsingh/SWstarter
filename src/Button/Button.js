import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <div>
            <button className={`SearchButton-${props.isInput ? 'abled' : 'Disabled'}`} type='submit'>{props.purpose}</button>
        </div>
    )
}

export default Button;