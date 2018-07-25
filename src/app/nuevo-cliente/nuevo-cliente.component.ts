import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, ReactiveFormsModule, Validators }
  from '@angular/forms';

import "rxjs/add/operator/debounceTime";
import 'rxjs/add/operator/filter';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { ProductoService } from '../service/productoService'

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.scss']
})
export class NuevoClienteComponent implements OnInit {
  formulario;
  constructor() { }

  ngOnInit() {
    this.formulario = new FormGroup({
      tipoDocumento: new FormControl(null, Validators.required),
      nroDocumento: new FormControl()
    });

    this.formulario.controls.tipoDocumento.valueChanges
      .subscribe(v => {
        console.log(v);
        let validadores = [Validators.required,Validators.pattern(/^\d+$/)];
        if (v == 'DNI') {
          validadores.push(Validators.minLength(8));
          validadores.push(Validators.maxLength(8));
        }
        else if (v == 'RUC') {
          validadores.push(Validators.minLength(11));
          validadores.push(Validators.maxLength(11));
        }
        this.formulario.controls.nroDocumento.clearValidators();
        this.formulario.controls.nroDocumento.setValidators(validadores);
        this.formulario.controls.nroDocumento.updateValueAndValidity();
      });





  }

}
