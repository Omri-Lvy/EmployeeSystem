package employeesystemapi.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class EmailAlreadyExistsAdvice {

    @ResponseStatus(HttpStatus.CONFLICT)
    @ResponseBody
    @ExceptionHandler(EmailAlreadyExistsException.class)
    public Map<String, String> exceptionHandler ( EmailAlreadyExistsException e ) {
        Map<String, String> map = new HashMap<>();
        map.put("message", e.getMessage());
        return map;
    }
}
