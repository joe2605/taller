

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import "rxjs/add/operator/debounceTime";
import 'rxjs/add/operator/filter';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { ProductoService } from '../service/productoService'

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

@Component({
  templateUrl: './ng-bootstrap-tests.component.html',
})
export class NgBootstrapTestsComponent implements OnInit {
  formulario;
  constructor() { }

  ngOnInit() {
    this.formulario = new FormGroup({
      tipoDocumento: new FormControl(null, Validators.required),
      nroDocumento: new FormControl(),
      date: new FormControl(),
      auto: new FormControl()
    });

    this.formulario.controls.tipoDocumento.valueChanges
      .subscribe(v => {
        console.log(v);
        let validadores = [Validators.required, Validators.pattern(/^\d+$/)];
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


  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );



}
