package employeesystemapi.controller;

import employeesystemapi.exception.EmailAlreadyExistsException;
import employeesystemapi.exception.InvalidEmployeeFieldException;
import employeesystemapi.model.Employee;
import employeesystemapi.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @PostMapping("/employee")
    void addEmployee(@RequestBody Employee employee) {
        employeeDetailsValidation(employee);
        employeeRepository.save(employee);
    }

    @GetMapping("/employee/{id}")
    ResponseEntity getEmployeeBy(@PathVariable Long id) {
        Employee employee = employeeRepository.findById(id).orElse(null);
        if (employee == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(employee);
    }

    @PostMapping("/employee/{id}")
    void updateEmployee(@RequestBody Employee employee) {
        employeeDetailsValidation(employee);
        Employee employeeToUpdate = employeeRepository.findById(employee.getId()).orElse(null);
        if (employeeToUpdate != null) {
            employeeToUpdate.setFirstName(employee.getFirstName());
            employeeToUpdate.setLastName(employee.getLastName());
            employeeToUpdate.setEmail(employee.getEmail());
            employeeToUpdate.setNickName(employee.getNickName());
        }
        employeeRepository.save(employeeToUpdate);
    }

    @GetMapping("/employees")
    List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @PostMapping("/employee/delete/{id}")
    void deleteEmployee(@PathVariable Long id) {
        if (!employeeRepository.existsById(id)) {
           throw new RuntimeException("Employee not found");
        }
    	employeeRepository.deleteById(id);
    }


    private void employeeDetailsValidation(Employee employee) {
        if (employee.getFirstName() == null || employee.getFirstName().isEmpty()) {
            throw new InvalidEmployeeFieldException("First Name");
        }
        if (employee.getLastName() == null || employee.getLastName().isEmpty()) {
            throw new InvalidEmployeeFieldException("Last Name");
        }
        if (employee.getEmail() == null || employee.getEmail().isEmpty()){
            throw new InvalidEmployeeFieldException("Email");
        }
        if ( employee.getNickName() == null || employee.getNickName().isEmpty() ) {
            throw new InvalidEmployeeFieldException("Nick Name");
        }
        if (employeeRepository.existsByEmail(employee.getEmail())) {
            throw new EmailAlreadyExistsException(employee);
        }
    }


}
