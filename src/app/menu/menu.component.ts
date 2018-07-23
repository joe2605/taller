import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  opciones;

  constructor() { }

  ngOnInit() {
    this.opciones = [
      {
        name: 'Productos',
        url: '/productos'
      },
      {
        name: 'Nuevo Producto',
        url: '/productos_nuevo'

      },
      {
        name: 'Clientes',
        url: '/clientes'
      }
    ];
  }

}
