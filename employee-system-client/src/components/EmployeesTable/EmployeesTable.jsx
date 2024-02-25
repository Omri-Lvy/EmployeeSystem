import React, { useContext } from "react";
import EmployeesTableRow from "../EmployeesTableRow/EmployeesTableRow";
import "./EmployeesTable.css";
import { EmployeesSystemContext } from "../../App";

const EmployeesTable = ({isLoading}) => {
    const {employees} = useContext(EmployeesSystemContext)
    const tableHeaderRenderer = () => (
        <thead className="employee-table__header">
            <tr>
                {Object.keys(employees[0]).map((key, index) => {
                    const title = key.charAt(0).toLocaleUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()
                    return (
                        <th key={index}>{title}</th>
                    )
                })}
                <th></th>
            </tr>
        </thead>
    )

    const tableBodyRenderer = () => (
        <tbody className="employee-table__body">
            {employees.map((employee, index) => {
                return (
                    <EmployeesTableRow key={index} employee={employee}/>
                )
            }
            )}
        </tbody>
    )

    return (
            isLoading ? <h1>Loading...</h1> :
            employees.length === 0 ? <h1>No Employees</h1> :
        <table className="employee-table">
            {tableHeaderRenderer()}
            {tableBodyRenderer()}
        </table>
    )

};

export default EmployeesTable;