import { Routes } from '@angular/router';
import { Products } from './pages/products/products';
import { ProductDetails } from './pages/product-details/product-details';

export const routes: Routes = [
    {path : '', component : Products},
    {path : 'product/:id', component : ProductDetails}
];
