import React, { useContext, useEffect, useState } from "react";
import "./EmployeeDetailsForm.css";
import TextField from "../FormInput/TextField";
import EmailField from "../FormInput/EmailField";
import { getAllEmployees } from "../../utils/ApiFetcher";
import { EmployeesSystemContext } from "../../App";

const EmployeeDetailsForm = ({formSubmitHandler}) => {
    const {setEmployees, employee, setIsModalOpen} = useContext(EmployeesSystemContext)
    const [firstName, setFirstName] = useState(employee?.firstName || "");
    const [lastName, setLastName] = useState(employee?.lastName || "");
    const [nickName, setNickName] = useState(employee?.nickName || "");
    const [email, setEmail] = useState(employee?.email || "");
    const [id, setId] = useState(employee?.id || undefined);
    const [errorMessages, setErrorMessages] = useState("")

    useEffect(() => {
        setFirstName(employee?.firstName || "")
        setLastName(employee?.lastName || "")
        setEmail(employee?.email || "")
        setId(employee?.id || "")
        setNickName(employee?.nickName || "")
    },[employee])
    const submitHandler = async (e) => {
        e.preventDefault()
        const response = await formSubmitHandler({id, firstName, lastName, email, nickName})
        if (response.status === 200) {
            const updatedEmployees = await getAllEmployees();
            setEmployees(updatedEmployees);
            setIsModalOpen(false);
        }
        if (response.status === 500 || response.status === 409) {
            const data = await response.json();
            console.log(data.message);
            setErrorMessages(data.message);
        }
    }

    const resetHandler = (e) => {
        e.preventDefault()
        setFirstName("")
        setLastName("")
        setEmail("")
    }
    const firstNameChangeHandler = (e) => {
        setFirstName(e.target.value)
    }
    const lastNameChangeHandler = (e) => {
        setLastName(e.target.value)
    }
    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const nickNameChangeHandler = (e) => {
        setNickName(e.target.value)
    }

    return (
        <div className="form-contianer">
            <h2 className="form-title">Employee Details</h2>
            <h4 className={errorMessages !== "" ? "error-messages show" : "error-messages"}>{errorMessages}</h4>
            <form className="employee-details-form" onSubmit={submitHandler} data-employee-id={id}>
                <TextField value={firstName} changeHandler={firstNameChangeHandler} placeHolder="First Name" id="first-name" name="first_name" required={false}/>
                <TextField value={lastName} changeHandler={lastNameChangeHandler} placeHolder="Last Name" id="last-name" name="last_name" required={true}/>
                <TextField value={nickName} changeHandler={nickNameChangeHandler} placeHolder="Nickname" id="nickname" name="nickName" required={true}/>
                <EmailField value={email} changeHandler={emailChangeHandler} placeHolder="Email" id="email" name="email" required={true}/>
                <div className="form-button-wrapper">
                    <button type="submit">Save</button>
                    <button type="reset" onClick={resetHandler}>Clear</button>
                </div>
            </form>
        </div>
    );
};

export default EmployeeDetailsForm;