import React from 'react';

export default ({value, onChange, classNames, type, children, placeholder}) => {
    return (
        <div className="form-group">
            {children}
            <input type={type} onChange={onChange} value={value} className="form-control f-control" placeholder={placeholder}/>
            <span className={'icon ' + classNames.icon}></span>
        </div>
    );
}