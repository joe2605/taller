import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/productoService';

import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos;
  constructor(private http: Http,
    private productoService: ProductoService
  ) { }

  ngOnInit() {
    // this.http.get('/api/prueba.json')
    //   .pipe(
    //     map(resp => resp.json())
    //   ).subscribe(resp => {
    //     this.productos = resp;
    //   });
    this.productos = this.productoService.getAll();

  }


}
