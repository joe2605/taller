import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from "./login/login.component";
import { ProductosComponent } from "./productos/productos.component";
import { NuevoProductoComponent } from "./nuevo-producto/nuevo-producto.component";
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';
import { NgBootstrapTestsComponent } from './ng-bootstrap-tests/ng-bootstrap-tests.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent  //--> router-oulet -
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'productos_nuevo',
    component: NuevoProductoComponent
  },
  {
    path: 'cliente_nuevo',
    component: NuevoClienteComponent
  },
  {
    path: 'prueba_ngb',
    component: NgBootstrapTestsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [
  ]
})
export class AppRoutingModule { }
