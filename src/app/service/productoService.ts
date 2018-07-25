import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductoService {
  // singleton ->

  items: Array<any>;


  constructor(http: Http) {
    this.items = [];
  }

  getAll = () => {
    //http.get
    return this.items;
  }

  save = (data) => { //http.post
    this.items.push(data);
  }

}
