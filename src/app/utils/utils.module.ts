import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  DisableControlDirective,
  InvalidmessageDirective,
  InvalidTypeDirective
} from './utils.index';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [

  ],
  exports: [
    DisableControlDirective,
    InvalidmessageDirective,
    InvalidTypeDirective
  ],
  declarations: [
    DisableControlDirective,
    InvalidmessageDirective,
    InvalidTypeDirective
  ]
})
export class UtilsModule { }
