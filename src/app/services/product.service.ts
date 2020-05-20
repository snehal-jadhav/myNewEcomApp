import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Product 1', 'best product in the world', 100, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXfh_ROCmN6xFKw4GI-gAQXJCF-sIcHLi0MMo_D0J6Pnil69b2NQ&s'),
    new Product(2, 'Product 2', 'best product in the world', 200, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkNrZJj21_ubci6CgoRfJ7qoxzBEll4NpSp9C1FG7tthuVWN5L&s'),
    new Product(3, 'Product 3', 'best product in the world', 300, 'https://lh4.googleusercontent.com/proxy/WvHWwYsB3BtzNq3j9FHTtjdIN-Ihv1yrP4K8vOUZ07Ty1mR7hzh-bxs5Llj0meyEdoscbSyjNAqqqXwdKPsmQwaYf9su229V88ia6rQ1iOtQ8EQ5oAQ-W7WaofuL4fTCnlWjh1A3yCFr7R8FlXDE27r0hurtgrb_OqJBHd51D5DV8cqs'),
    new Product(4, 'Product 4', 'best product in the world', 400, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD8xDvE1ldI_qY-ERT9LAJ5E0ZIxV0caUL2_C6rRnq_LU4_oyxVA&s'),
    new Product(5, 'Product 5', 'best product in the world', 500, 'https://pluspng.com/img-png/dress-png-women-dress-png-transparent-image-1350.png'),
    new Product(6, 'Product 6', 'best product in the world', 600, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9CgAbA5kvIymQ8o5rwFYjLmpdHFkVdG2ppFsSbVoCbjBlGmvD&s'),
    new Product(7, 'Product 7', 'best product in the world', 700, 'https://www.kindpng.com/picc/m/137-1372539_cloth-png-no-background-aesthetic-top-transparent-background.png')

  ]

  constructor() { }


  //service method

  getProducts(): Product[] {
    return this.products;
  }
}
