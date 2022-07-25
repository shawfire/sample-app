package net.shawfire.sampleapi.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @RequestMapping("/")
    public @ResponseBody String about() {
        return """
            {
                "data": "This is a sample-api"
            }""";
    }

}
