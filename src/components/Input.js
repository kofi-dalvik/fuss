import React from 'react';

/**
 * @description Input Element
 * @param value {String, required} string value to bind this element to state
 * @param onChange {Function, required} function to bind value to state
 * @param type {string, required} specifies the type of input element
 * @param className {Object, required} provides classes to style
 * @param placeholder {String, required} placeholder
 */
export default ({value, onChange, classNames, type, children, placeholder}) => {
    return (
        <div className="form-group">
            {children}
            <input type={type} onChange={onChange} value={value} className="form-control f-control" placeholder={placeholder}/>
            <span className={'icon ' + classNames.icon}></span>
        </div>
    );
}