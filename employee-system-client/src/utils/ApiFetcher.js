export const getAllEmployees = async () => {
    const response = await fetch("http://localhost:8080/employees")
    return await response.json()
}

export const createOrUpdateEmployee = async (employee) => {
    return await fetch(`http://localhost:8080/employee${employee.id !== "" ? "/" + employee.id: ""}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    });
}

export const getEmployeeById = async (id) => {
    if (id === "") {
        return getAllEmployees()
    }
    const response = await fetch(`http://localhost:8080/employee/${id}`)
    if (response.status !== 200) {
        return []
    }
    return await response.json()
}

export const deleteEmployee = async (id) => {
    const response = await fetch(`http://localhost:8080/employee/delete/${id}`, {
        method: "POST",
    })
    return await response
}