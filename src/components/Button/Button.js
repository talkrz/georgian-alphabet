import React from 'react';
import './Button.css';

function Button({ text, onClick, type = 'button' }) {
    return <button type={type} className="Button" onClick={onClick}>{text}</button>;
}

export default Button;
