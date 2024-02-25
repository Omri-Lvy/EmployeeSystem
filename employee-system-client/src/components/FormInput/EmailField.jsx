import React from "react";
import "./InputField.css";

const EmailField = ({value, changeHandler, placeHolder,id, name, required}) => {
    return (
        <div className="form-input-wrapper">
            <input type="email" name={name} id={id} value={value} onChange={changeHandler} placeholder={placeHolder} className="form-input" required={required}/>
            <label htmlFor={id} className="input-label">
                {placeHolder}
            </label>
        </div>
    );
};

export default EmailField;