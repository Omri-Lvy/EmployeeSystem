import React, { useContext, useState } from "react";
import TextField from "../FormInput/TextField";
import { getEmployeeById } from "../../utils/ApiFetcher";
import "./FilterForm.css";
const FilterForm = () => {
    const {setEmployees} = useContext(EmploeesSystemContext)
    const [id, setId] = useState('');

    const idInputChangeHandler = (e) => {
        setId(e.target.value)
    }

    const filterFormSubmitHandler = async (e) => {
        e.preventDefault();
        const data = await getEmployeeById(id);
        setEmployees(data);
    }

    return (
        <form onSubmit={filterFormSubmitHandler} className="filter-form">
            <span>Search by id:</span>
            <div className="form-input-container">
                <TextField id={id} value={id} required={false} changeHandler={idInputChangeHandler} placeHolder="Id" name="searchById"/>
                <button type="submit">Search</button>
            </div>
        </form>
    );
};

export default FilterForm;