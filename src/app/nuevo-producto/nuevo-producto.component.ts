import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, ReactiveFormsModule, Validators }
  from '@angular/forms';

  import "rxjs/add/operator/debounceTime";
  import 'rxjs/add/operator/filter';

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
      precio: new FormControl(),
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
    this.formulario.controls.precio.valueChanges.debounceTime(2000).subscribe(
      precio => {
        console.log(precio);
      //   this.formulario.controls.subtotal.setValue(
      //     this.formulario.controls.precio.value *
      //     this.formulario.controls.cantidad.value)
      }
    );






  }

}
