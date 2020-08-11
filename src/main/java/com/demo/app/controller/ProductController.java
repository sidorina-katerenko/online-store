package com.demo.app.controller;

import com.demo.app.dto.ProductResponse;
import com.demo.app.service.ProductService;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/products/all")
    public List<ProductResponse> getAll() {
        return productService.getAll();
    }

    @GetMapping("/products/{id}")
    public ProductResponse getById(@PathVariable Integer id) {
        return productService.getById(id);
    }

    @GetMapping("/products/")
    public List<ProductResponse> getByBrand(@RequestParam("brand") String brand) {
        return productService.getByBrand(brand);
    }
}

