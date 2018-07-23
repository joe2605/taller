import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { MenuComponent } from './menu/menu.component';
import { HttpModule } from '@angular/http';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductosComponent,
    MenuComponent,
    NuevoProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
//import{FormsModule,ReactiveFormsModule } from '@angular/forms';
    
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
