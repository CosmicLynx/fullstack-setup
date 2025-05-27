package org.example.backend.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/hello")
public class HelloWorldController {
    
    @GetMapping
    public String helloWorld() {
        return "Hello World!";
    }
}
