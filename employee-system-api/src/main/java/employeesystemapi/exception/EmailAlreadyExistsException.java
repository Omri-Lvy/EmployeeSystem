package employeesystemapi.exception;

import employeesystemapi.model.Employee;

public class EmailAlreadyExistsException extends RuntimeException {
    public EmailAlreadyExistsException ( Employee employee ) {
        super("Employee with email " + employee.getEmail() + " already exists");
    }
}
