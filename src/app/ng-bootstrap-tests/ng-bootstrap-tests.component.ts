

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, filter } from 'rxjs/operators';
import "rxjs/add/operator/debounceTime";
import { combineLatest } from 'rxjs/observable/combineLatest';
import { ProductoService } from '../service/productoService'
import { Http } from '@angular/http';

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

const productos = [
  { id: 1, nombre: 'Televisor', marca: { nombre: 'Samsung' }, precio: 344 },
  { id: 2, nombre: 'Teclado', marca: { nombre: 'Lg' }, precio: 344 },
  { id: 3, nombre: 'Laptop', marca: { nombre: 'Asus' }, precio: 344 },
  { id: 4, nombre: 'Mouse', marca: { nombre: 'KKK' }, precio: 344 },
  { id: 5, nombre: 'Proyector', marca: { nombre: 'ooo' }, precio: 344 },
]


@Component({
  templateUrl: './ng-bootstrap-tests.component.html',
})
export class NgBootstrapTestsComponent implements OnInit {
  formulario;
  ldForm;
  notas;
  valor;
  constructor(
    // productoSerice: ProductoService
    private http: Http
  ) { }

  ngOnInit() {
    // productos=  productoSerice.getAll();

    this.formulario = new FormGroup({
      tipoDocumento: new FormControl(null, Validators.required),
      nroDocumento: new FormControl(),
      date: new FormControl(),
      auto: new FormControl(),
      combo: new FormControl(null, Validators.required)
    });

    this.formulario.controls.date.valueChanges
      .subscribe(v => {
        var modulo = v.day % 2;

        if (modulo == 0) {
          this.http.get('/api/n' + modulo + '.json').pipe(
            map(resp => resp.json())
          ).subscribe(n => {
            this.valor = n;

          })
        } else {
          this.http.get('/api/n' + modulo + '.json').pipe(
            map(resp => resp.json())
          ).subscribe(n => {
            this.valor = n;

          })

        }


      })






    this.ldForm = new FormGroup({
      c1: new FormControl(null, Validators.required),
    });




    this.formulario.controls.combo.valueChanges
      .subscribe(v => {
        this.http.get('/api/notas' + v + '.json').pipe(
          map(resp => resp.json())
        ).subscribe(n => {
          this.notas = n;

        })
      })


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

  // formatter = (p: any) => p.nombre;

  formateador = (p: any) => {
    return p.nombre + p.precio
  };

  productoSeleccionado = (p) => {
    alert('selectFFF: ' + p.item.id);
    this.http.get('/api/notas' + p.item.id + '.json').pipe(
      map(resp => resp.json())
    ).subscribe(n => {
      this.notas = n;

    })
  }

  search = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(500),
      // distinctUntilChanged(),
      filter(term => { return term.length >= 2 }),
      map(term => {
        // { id: 1, nombre: 'Televisor', precio: 344 },
        // { id: 2, nombre: 'Teclado', precio: 344 },
        return productos.filter(unEstado => {
          return unEstado.nombre.toLowerCase().indexOf(term) > -1
        })
        // return ['DDDDD', 'EEEE']
      })
    );
  }
  otrosDatos;
  verOpcion = (item) => {
    alert(333);
    debugger;
    this.http.get('/api/otraConsulta' + item.id + '.json').pipe(
      map(resp => resp.json())
    ).subscribe(n => {
      this.otrosDatos = n;
    })
  }


  //   states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1
  // )
  // .slice(0, 10)

  lineasDetalles = [];
  guardarLD = () => {
    if (!this.ldForm.invalid) {
      this.lineasDetalles.push(this.ldForm.value);
      this.ldForm.reset();
    } else
      alert('invalido')
  }

  editarLd = (ld, index) => {
    alert('editarLd');
    debugger;
    this.ldForm.controls.c1.setValue(ld.c1);

  }



}
