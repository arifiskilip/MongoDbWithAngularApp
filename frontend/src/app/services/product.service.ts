import { Injectable } from '@angular/core';
import { GenericHttpService } from './generic-http.service';
import { MessageResponseModel } from '../models/message.response';
import { PaginationResultModel } from '../models/pagination.result';
import { RequestModel } from '../models/request';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _http: GenericHttpService
  ) { }

  add(model: FormData, callBack: (res: MessageResponseModel)=> void){
    this._http.post<MessageResponseModel>("/products/add", model, res=> callBack(res));
  }

  update(model: FormData, callBack: (res: MessageResponseModel)=> void){
    this._http.post<MessageResponseModel>("/products/update", model, res=> callBack(res));
  }

  getAll(model: RequestModel, callBack: (res: PaginationResultModel<Product[]>)=> void){
    this._http.post<PaginationResultModel<Product[]>>("/products/getall", model, res=> callBack(res));
  }

  removeById(model: any, callBack: (res: MessageResponseModel)=> void){
    this._http.post<MessageResponseModel>("/products/delete", model, res=> callBack(res));
  }

  changeActiveStatus(model: any, callBack: (res: MessageResponseModel)=> void){
    this._http.post<MessageResponseModel>("/products/changeActiveStatus", model, res=> callBack(res));
  }

  getById(model: any, callBack: (res: Product)=> void){
    this._http.post<Product>("/products/getById", model, res=> callBack(res));
  }

  removeImageByProductIdAndIndex(model: any, callBack: (res: MessageResponseModel)=> void){
    this._http.post<MessageResponseModel>("/products/removeImageByProductIdAndIndex", model, res=> callBack(res));
  }

  getAllForHomePage(model: RequestModel, callBack: (res: Product[])=> void){
    this._http.post<Product[]>("/products/getAllForHomePage", model, res=> callBack(res));
  }
}
