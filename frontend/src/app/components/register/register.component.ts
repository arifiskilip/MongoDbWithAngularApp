import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../common/shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
    this.createRegisterForm();
  }

  registerForm:FormGroup = new FormGroup({});


  customErrorMessages = {
    name:{
      required: 'Şifre alanı zorunludur.',
      minLength: 'Şifre alanı en az 3 karakter olmalı.',
      maxLength: 'Şifre alanı en fazla 15 karakter olmalı.'
    }
    ,
    email: {
      required: 'Email alanı zorunludur.',
      email: 'Geçerli bir email adresi girin.'
    },
    password: {
      required: 'Şifre alanı zorunludur.',
      minLength: 'Şifre alanı en az 3 karakter olmalı.',
      maxLength: 'Şifre alanı en fazla 15 karakter olmalı.'
    }
  };
  /**
   *
   */
  constructor(private formBuilder:FormBuilder) {
    
  }

  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      name: ["",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      email: ["",[Validators.required, Validators.email]],
      password: ["",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]]
    })
  }

  get name(){ return this.registerForm.get("name")}
  get email(){ return this.registerForm.get("email")}
  get password(){ return this.registerForm.get("password")}
}
