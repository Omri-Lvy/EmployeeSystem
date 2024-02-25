package employeesystemapi.repository;

import employeesystemapi.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    boolean existsByEmail ( String email );
}
