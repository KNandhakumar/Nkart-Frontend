import { Routes } from '@angular/router';
import { Products } from './pages/products/products';
import { ProductDetails } from './pages/product-details/product-details';
import { Cart } from './pages/cart/cart';

export const routes: Routes = [
    {path : '', component : Products},
    {path : 'product/:id', component : ProductDetails},
    {path : 'cart', component : Cart}
];
