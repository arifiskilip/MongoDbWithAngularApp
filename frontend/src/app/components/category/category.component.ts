import { CategoryService } from './../../services/category.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Category } from '../../models/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../common/shared/shared.module';
import { ToastrService } from 'ngx-toastr';
import { SwalService } from '../../services/swal.service';
import { CategorySearchPipe } from '../../pipes/category-search.pipe';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [SharedModule,CategorySearchPipe],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements  OnInit{
  ngOnInit(): void {
    this.createCategoryAddForm();
    this.createCategoryUpdateForm();
    this.getAll();
  }

  categories:Category[];
  categoryAddForm:FormGroup;
  categoryUpdateForm:FormGroup;
  searchText:string="";

  /**
   *
   */
  constructor(
    private categoryService:CategoryService,
    private formBuilder:FormBuilder,
    private toastr:ToastrService,
    private swal:SwalService
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

  createCategoryUpdateForm(){
    this.categoryUpdateForm = this.formBuilder.group({
      _id:[""],
      name:["",[Validators.required]]
    })
  }

  add(){
    if(this.categoryAddForm.valid){
      var category = Object.assign({},this.categoryAddForm.value);
      this.categoryService.add(category,(res)=>{
        this.toastr.success(res.message,"Başarılı")
        this.getAll();
      })
    }
  }

  delete(category:Category){
    this.swal.callSwal(`${category.name} adlı kategoriyi silmek istediğinizden
    eminmisiniz?`,"Kategori Silinecek","Evet",()=>{
      this.categoryService.delete(category,(res)=>{
        this.toastr.success(res.message,"Başarılı")
          this.getAll();
      })
    })
  }

  setCategory(category:Category){
    this.categoryUpdateForm.get("name").setValue(category.name);
    this.categoryUpdateForm.get("_id").setValue(category._id);
  }
  update(){
    if(this.categoryUpdateForm.valid){
      var category = Object.assign({},this.categoryUpdateForm.value);
      this.categoryService.update(category,(res)=>{
        this.toastr.success(res.message,"Başarılı")
        this.getAll();
        this.categoryUpdateForm.get("name").setValue("");
      })
    }
  }

}
