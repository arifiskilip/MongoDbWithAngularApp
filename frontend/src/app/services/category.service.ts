import { Injectable } from '@angular/core';
import { GenericHttpService } from './generic-http.service';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http:GenericHttpService
  ) { }


  getAll(callBack:(res:Category[])=>void){
    return this.http.get("/categories/getall",callBack)
  }

  get(model:Category,callBack:(res:Category)=>void){
    return this.http.get("/categories/get",callBack)
  }

  add(model:Category,callBack:(res:any)=>void){
    return this.http.post("/categories/add",model,callBack)
  }

  delete(model:Category,callBack:(res:any)=>void){
    return this.http.post("/categories/delete",model,callBack)
  }

  update(model:Category,callBack:(res:any)=>void){
    return this.http.post("/categories/update",model,callBack)
  }
 
}
