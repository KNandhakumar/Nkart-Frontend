import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../service/product-service';
import { ProductData } from '../../interface/product-data';
import { CartService } from '../../service/cart-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private productService: ProductService,
    private cartService:CartService
  ){}

  product!:ProductData;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.productService.getProductById(id).subscribe(data => {
      this.product = data;
      console.log(this.product);
    })
  };

    // add to cart method
  addToCart(){    
    const cart = {
      userEmail : "ghost@gmail.com",
      productId : this.product.id!,
      quantity : 1
    };

    this.cartService.addToCart(cart).subscribe(responce => {
      console.log(responce);

      alert("Product Added to Cart Successfully")
    });
  }

}
