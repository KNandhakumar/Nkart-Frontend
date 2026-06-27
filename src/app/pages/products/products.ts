import { CommonModule } from '@angular/common';
import { ProductData } from '../../interface/product-data';
import { ProductService } from './../../service/product-service';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  products:ProductData[] = [];

  constructor(private ProductService:ProductService){}

  ngOnInit(): void {
    this.ProductService.getAllProducts().subscribe((data) => {
      this.products = data;
    })
  }

}
