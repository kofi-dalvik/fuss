import React from 'react';

/**
 * @description Button component
 * @param onClick {function, required} handles click event on button
 * @param className {String, optional} apply styles to button
 * @param children {String, optional}
 */
export default ({onClick = () => {}, classNames = {button: '', icon: ''}, children = 'button name'}) => {
    return (
        <button className={'btn ' + classNames.button} onClick={onClick}>
            {children} <span className={classNames.icon}></span>
        </button>
    );
}