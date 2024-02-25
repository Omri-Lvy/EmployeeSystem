import React, { useContext } from "react";
import { EmployeesSystemContext } from "../../App";
import "./AddNewEmployeeButton.css";

const AddNewEmployeeButton = () => {
    const {setIsModalOpen, setEmployee} = useContext(EmployeesSystemContext)

    const buttonClickHandler = () => {
        setEmployee({})
        setIsModalOpen(true)
    }

    return (
        <button onClick={buttonClickHandler} className="add-new-employee-btn">
            Add New Employee
        </button>
    );
};

export default AddNewEmployeeButton;