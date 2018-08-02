import React from 'react';

export default ({onClick = () => {}, classNames = {button: '', icon: ''}, children = 'button name'}) => {
    return (
        <button className={'btn ' + classNames.button} onClick={onClick}>
            {children} <span className={classNames.icon}></span>
        </button>
    );
}