import { Component, OnInit } from '@angular/core';
import { MessangerService } from 'src/app/services/messanger.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  cartItems = [
    // {id: 1, productName: 'item1', qty: 2, price: 200},
    // {id: 2, productName: 'item2', qty: 5, price: 250},
    // {id: 3, productName: 'item3', qty: 4, price: 300},
  ];

  cartTotal = 0;

  constructor(private msg: MessangerService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: Product) =>{
      this.addProductToCart(product);
    })
  }

  addProductToCart(product: Product){

let productExist = false

for(let i in this.cartItems) {
  if(this.cartItems[i].productId === product.id) {
    this.cartItems[i].qty++;
    productExist = true;
    break;
  }
}

if(!productExist){
  this.cartItems.push({
    productId: product.id,
    productName: product.name,
    qty: 1,
    price: product.price
  })
}

    

    this.cartTotal = 0
    this.cartItems.forEach(item => {this.cartTotal += (item.qty) * (item.price)});
  }

}
