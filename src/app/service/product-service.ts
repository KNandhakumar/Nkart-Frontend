import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductData } from '../interface/product-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
   // api url
   private apiUrl = 'http://localhost:8080/api/products';

   constructor(private http:HttpClient){}

   getAllProducts():Observable<ProductData[]>{
    return this.http.get<ProductData[]>(this.apiUrl);
   }

   getProductById(id:number){
    return this.http.get<ProductData>(`${this.apiUrl}/${id}`);
   }
}
