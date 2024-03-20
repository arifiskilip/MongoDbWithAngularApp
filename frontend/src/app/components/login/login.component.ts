import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../common/shared/shared.module';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomErrorMessagesService } from '../../services/custom-error-messages.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
    this.createLoginForm();
    
  }

  loginForm:FormGroup = new FormGroup({});

  /**
   *
   */
  constructor(private formBuilder:FormBuilder, 
    public customErrorMessages:CustomErrorMessagesService) {
    
    
  }
 

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["",[Validators.required, Validators.email]],
      password: ["",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
    })
  }


  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  login(){
    console.log(this.loginForm.value)
  }

}
