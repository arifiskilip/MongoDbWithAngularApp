import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidDirective } from '../directives/valid.directive';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ValidDirective
  ],
  exports : [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ValidDirective
  ]
})
export class SharedModule { }
