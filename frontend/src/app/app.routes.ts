import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./components/register/register.component').then(
        (c) => c.RegisterComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./components/layouts/layouts.component').then(
        (c) => c.LayoutsComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/home/home.component').then(
            (c) => c.HomeComponent
          ),
      },
      {
        path: 'category',
        loadComponent: () =>
          import('./components/category/category.component').then(
            (c) => c.CategoryComponent
          ),
      },
      {
        path: 'product',
        loadComponent: () =>
          import('./components/product/product.component').then(
            (c) => c.ProductComponent
          ),
      },
      {
        path: 'product-add',
        loadComponent: () =>
          import('./components/product-add/product-add.component').then(
            (c) => c.ProductAddComponent
          ),
      },
      {
        path: 'product-update/:productId',
        loadComponent: () =>
          import('./components/product-update/product-update.component').then(
            (c) => c.ProductUpdateComponent
          ),
      },
    ],
  },
];
