package employeesystemapi.exception;

public class InvalidEmployeeFieldException extends RuntimeException {
    public InvalidEmployeeFieldException ( String invalidDetailFieldName) {
        super (invalidDetailFieldName + " field is invalid");
    }
}
