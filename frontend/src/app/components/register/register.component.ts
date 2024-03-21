import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../common/shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomErrorMessagesService } from '../../services/custom-error-messages.service';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

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
  get name(){ return this.registerForm.get("name")}
  get email(){ return this.registerForm.get("email")}
  get password(){ return this.registerForm.get("password")}
  get confirmPassword() { return this.registerForm.get("confirmPassword")}

  /**
   *
   */
  constructor(
    private formBuilder:FormBuilder,
    public customErrorMessages:CustomErrorMessagesService,
    private authService:AuthService,
    private toastr:ToastrService) {
    
  }

  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      name: ["",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      email: ["",[Validators.required, Validators.email]],
      password: ["",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      confirmPassword: ["",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
    })
  }

  register(){
    if(this.registerForm.valid){
      if(this.password.value == this.confirmPassword.value){
        this.authService.register(this.registerForm.value)
      }
      else{
        this.toastr.warning("Şifre alanları aynı olmalıdır!","Uyarı")
      }
    }
  }
 
}
