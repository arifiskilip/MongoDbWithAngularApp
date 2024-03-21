import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidDirective } from '../directives/valid.directive';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ValidDirective,
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
    NgxSpinnerModule
  ]
})
export class SharedModule { }
