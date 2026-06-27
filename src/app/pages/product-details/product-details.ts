import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product-service';
import { ProductData } from '../../interface/product-data';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private productService: ProductService
  ){}

  product!:ProductData;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.productService.getProductById(id).subscribe(data => {
      this.product = data;
      console.log(this.product);
    })
  }

}
