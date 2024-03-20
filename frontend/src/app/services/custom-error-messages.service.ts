import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomErrorMessagesService {


  email = {
    required: 'Email alanı zorunludur.',
    email: 'Geçerli bir email adresi girin.'
  };

  password = {
    required: 'Şifre alanı zorunludur.',
    minLength: 'Şifre alanı en az 3 karakter olmalı.',
    maxLength: 'Şifre alanı en fazla 15 karakter olmalı.'
  };
}
