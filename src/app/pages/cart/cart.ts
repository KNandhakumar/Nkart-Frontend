import { Component, OnInit } from '@angular/core';
import { CartData } from '../../interface/cart-data';
import { CartService } from '../../service/cart-service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {

  cartItems:CartData[] = [];

  constructor(private cartService:CartService){}

  ngOnInit(): void {
    this.cartService.getCartItems("ghost@gmail.com").subscribe(data => {
      this.cartItems = data;

      console.log(this.cartItems);
    })
  }
}
