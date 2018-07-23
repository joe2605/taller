import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, ReactiveFormsModule, Validators }
  from '@angular/forms';

import "rxjs/add/operator/debounceTime";
import 'rxjs/add/operator/filter';
import { combineLatest } from 'rxjs/observable/combineLatest';


@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.scss']
})
export class NuevoProductoComponent implements OnInit {

  formulario;


  constructor() { }

  ngOnInit() {

    this.formulario = new FormGroup({
      precio: new FormControl(null, [Validators.required, Validators.min(0), Validators.pattern(/^\d+$/)   ]),
      cantidad: new FormControl(),
      dscto: new FormControl(),
      subtotal: new FormControl()
    });

    //# escenario 1: caso mas ineficiente
    // this.formulario.controls.precio.valueChanges.subscribe(
    //   precio => {
    //     console.log(precio);
    //     this.formulario.controls.subtotal.setValue(
    //       this.formulario.controls.precio.value *
    //       this.formulario.controls.cantidad.value)
    //   }
    // );
    //
    // this.formulario.controls.cantidad.valueChanges.subscribe(
    //   precio => {
    //     console.log(precio);
    //     this.formulario.controls.subtotal.setValue(
    //       this.formulario.controls.precio.value *
    //       this.formulario.controls.cantidad.value)
    //   }
    // );


    // debounce
    this.formulario.controls.precio.valueChanges
      .debounceTime(2000)
      .subscribe(
        precio => {
          console.log(precio);
          //   this.formulario.controls.subtotal.setValue(
          //     this.formulario.controls.precio.value *
          //     this.formulario.controls.cantidad.value)
        }
      );


    combineLatest(
      this.formulario.controls.precio.valueChanges.debounceTime(2000),
      this.formulario.controls.cantidad.valueChanges.debounceTime(2000)
    ).subscribe(vs => {
      var precio = vs[0];
      var cantidad = vs[1];
      console.log('precio:  ' + precio);
      console.log('cantidad:  ' + cantidad);
      console.log('------------')
      this.formulario.controls.subtotal.setValue(precio * cantidad);
    })





  }

}
