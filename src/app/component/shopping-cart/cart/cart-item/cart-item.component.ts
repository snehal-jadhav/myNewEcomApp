import { Component, OnInit, Input } from '@angular/core';
import { MessangerService } from 'src/app/services/messanger.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItems: any;

  constructor() { }

  ngOnInit(): void {
  }

}
