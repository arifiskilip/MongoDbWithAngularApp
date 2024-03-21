import { Injectable } from '@angular/core';
import { GenericHttpService } from './generic-http.service';
import { Login } from '../models/login';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginResponse } from '../models/loginResponse';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http:GenericHttpService,
    private _toastr:ToastrService,
    private _router:Router
  ) { }


  login(model:Login){
    this._http.post("/auth/login",model,(res:LoginResponse)=>{
      localStorage.setItem("token",res.token);
      localStorage.setItem("user",JSON.stringify(res.user));
      this._toastr.success("Giriş işlemi başarılı!","Başarılı")
      this._router.navigateByUrl("/")
    })
  }

  register(model:Register){
    this._http.post("/auth/register",model,(res:LoginResponse)=>{
      localStorage.setItem("token",res.token);
      localStorage.setItem("user",JSON.stringify(res.user));
      this._toastr.success("Kayıt işlemi başarılı!","Başarılı")
      this._router.navigateByUrl("/")
    })
  }
}
