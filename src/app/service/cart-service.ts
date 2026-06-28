import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartData } from '../interface/cart-data';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  
  constructor(private http:HttpClient){}

  private apiUrl = "http://localhost:8080/api/cart";

  addToCart(cart:CartData){
    return this.http.post<CartData>(this.apiUrl,cart);
  };

  getCartItems(userEmail:string){
    return this.http.get<CartData[]>(`${this.apiUrl}/${userEmail}`);
  };
}
