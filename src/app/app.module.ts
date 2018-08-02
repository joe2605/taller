import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UtilsModule } from './utils/utils.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { MenuComponent } from './menu/menu.component';
import { HttpModule } from '@angular/http';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';

import { ProductoService } from './service/productoService';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component'
import { NgBootstrapTestsComponent } from './ng-bootstrap-tests/ng-bootstrap-tests.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductosComponent,
    MenuComponent,
    NuevoProductoComponent,
    NuevoClienteComponent,
    NgBootstrapTestsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    //import{FormsModule,ReactiveFormsModule } from '@angular/forms';
    NgbModule.forRoot(),
    UtilsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})

export class AppModule { }
