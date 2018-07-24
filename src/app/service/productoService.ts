import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductoService {
  items: Array<any>;

  constructor(http: Http) {
    this.items = [];
  }

  getAll = () => {
    return this.items;
  }

  save = (data) => {
    this.items.push(data);
  }

}
