import './App.css';
import Modal from "./components/Modal/Modal";
import React, { createContext, useEffect, useState } from "react";
import EmployeesTable from "./components/EmployeesTable/EmployeesTable";
import { createOrUpdateEmployee, getAllEmployees } from "./utils/ApiFetcher";
import EmployeeDetailsForm from "./components/EmployeeDetailsForm/EmployeeDetailsForm";
import FilterForm from "./components/FilterForm/FilterForm";
import AddNewEmployeeButton from "./components/AddNewEmployeeButton/AddNewEmployeeButton";

const EmployeesSystemContext     = createContext();
function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [employees, setEmployees] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [employee, setEmployee] = useState({})

    const createOrUpdateEmployeeHandler = async (employee) => (
        createOrUpdateEmployee(employee)
    )

    const fetchEmployees = async () => {
        const data = await getAllEmployees();
        setEmployees(data)
        setIsLoading(false)
    }

    const employeesSystemContextValue = {
        employees, setEmployees,
        employee, setEmployee,
        setIsModalOpen
    }

    useEffect(() => {
        fetchEmployees();
    }, [])

  return (
      <>
        <h1>Employee System</h1>
        <EmployeesSystemContext.Provider value={employeesSystemContextValue}>
            <div className="search-and-add-wrapper">
                <FilterForm/>
                <AddNewEmployeeButton/>
            </div>
            {
                isLoading ? <h2>Loading...</h2> :
                    employees.length === 0 ? <h2>There are no employees to present...</h2> :
                <EmployeesTable employees={employees}/>
            }
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <EmployeeDetailsForm employee = {employee}
                                     formSubmitHandler={createOrUpdateEmployeeHandler}/>
            </Modal>

        </EmployeesSystemContext.Provider>
      </>
  );
}

export default App;
export { EmployeesSystemContext };
