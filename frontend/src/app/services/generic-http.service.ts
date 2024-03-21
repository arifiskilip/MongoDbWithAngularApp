import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {

  private apiUrl:string = "http://localhost:5000/api";
  constructor(
    private _http:HttpClient,
    private _spinner:NgxSpinnerService,
    private _toastr:ToastrService
    ) { }

  get<T>(url:string,callBack:(res:T)=>void){
   return this._http.get<T>(this.apiUrl+url).subscribe({
      next:(res)=> {
        this._spinner.show();
        callBack(res)
      },
      error:(err:any) => {
        this._spinner.hide();
        this._toastr.error(err.error.message,"Hata");
      },
      complete:()=>{
        this._spinner.hide();
      }
    })
  }


  post<T>(url:string,model:any,callBack:(res:any)=> void){
    return this._http.post<any>(this.apiUrl+url,model).subscribe({
      next:(res)=> {
        this._spinner.show();
          callBack(res)
      },
      error:(err)=> {
          console.log(err)
          this._spinner.hide();
          this._toastr.error(err.error.message,"Hata");
      },
      complete:()=>{
        this._spinner.hide();
      }
    })
  }
}
