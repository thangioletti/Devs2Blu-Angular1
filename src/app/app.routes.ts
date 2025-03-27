import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { ContainerComponent } from './components/container/container.component';
import { ProductItemListComponent } from './pages/products/components/product-item-list/product-item-list.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/produtos',
  },
  {
    path: 'produtos/:id',
    pathMatch: 'full',
    component: ProductItemListComponent,
  },
  {
    path: 'produtos',
    pathMatch: 'full',
    component: ProductsComponent,
  },
  
  {
    path: 'cidades',
    pathMatch: 'full',
    component: ContainerComponent
  }
];
