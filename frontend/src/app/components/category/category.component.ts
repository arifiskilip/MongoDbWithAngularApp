import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../common/shared/shared.module';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements  OnInit{
  ngOnInit(): void {
    this.createCategoryAddForm();
    this.getAll();
  }

  categories:Category[];
  categoryAddForm:FormGroup;
  /**
   *
   */
  constructor(
    private categoryService:CategoryService,
    private formBuilder:FormBuilder,
    private toastr:ToastrService
  ) {
    
  }


  getAll(){
    this.categoryService.getAll((res)=>{
      this.categories = res;
    })
  }

  createCategoryAddForm(){
    this.categoryAddForm = this.formBuilder.group({
      name:["",[Validators.required]]
    })
  }

  add(){
    console.log("tıkladı")
    if(this.categoryAddForm.valid){
      var category = Object.assign({},this.categoryAddForm.value);
      this.categoryService.add(category,(res)=>{
        this.toastr.success(res.message,"Başarılı")
        this.getAll();
      })
    }
  }

  delete(category:Category){

    this.categoryService.delete(category,(res)=>{
      this.toastr.success(res.message,"Başarılı")
        this.getAll();
    })
  }

}
