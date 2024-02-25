import React from "react";
import "./InputField.css";

const TextField = ({value, changeHandler, placeHolder,id, name, required}) => {
    return (
        <div className="form-input-wrapper">
            <input type="text" name={name} value={value} onChange={changeHandler} id={id} placeholder={placeHolder} className="form-input" required={required}/>
            <label htmlFor={id} className="input-label">
                {placeHolder}
            </label>
        </div>
    );
};

export default TextField;