package duy.nb.project3.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionHanlder {

    @ExceptionHandler(value = {NotFoundException.class})
    public ResponseEntity<Object> handleNotFoundException
            (NotFoundException notFoundException){
        java.lang.Exception exception = new java.lang.Exception(
                notFoundException.getMessage(),
                notFoundException.getCause());
        return new ResponseEntity<>(exception, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(value = {DuplicateException.class})
    public ResponseEntity<Object> handleDuplicateException
            (DuplicateException duplicateException){
        java.lang.Exception exception = new java.lang.Exception(
                duplicateException.getMessage(),
                duplicateException.getCause());
        return new ResponseEntity<>(exception, HttpStatus.BAD_REQUEST);
    }
}
