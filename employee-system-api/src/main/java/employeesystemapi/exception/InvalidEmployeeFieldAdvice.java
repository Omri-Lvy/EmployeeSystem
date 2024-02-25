package employeesystemapi.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

public class InvalidEmployeeFieldAdvice {

    @ResponseStatus (HttpStatus.BAD_REQUEST)
    @ResponseBody
    @ExceptionHandler (InvalidEmployeeFieldException.class)
    public Map<String, String> exceptionHandler ( InvalidEmployeeFieldException e ) {
        Map<String, String> map = new HashMap<>();
        map.put("message", e.getMessage());
        return map;
    }
}
