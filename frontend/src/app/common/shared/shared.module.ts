import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidDirective } from '../directives/valid.directive';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ValidDirective,
    SweetAlert2Module,
    NgxSpinnerModule.forRoot({
      type:'ball-atom'
    })
  ],
  exports : [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ValidDirective,
    SweetAlert2Module,
    NgxSpinnerModule
  ]
})
export class SharedModule { }
