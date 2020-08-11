package com.demo.app.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer categoryId;

    @Column(length = 25)
    private String brand;

    @Column(length = 25)
    private String model;

    private BigDecimal price;
    private String img;
    private String description;

}
