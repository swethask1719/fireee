import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: any;
  password: any;
  message="";
  errorMessage= ""; //validation error handle

  error: {name:string,message:string} = {name: '' , message: ''}; //for firebase error handle
  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit() {
  }
  register(){
    if(this.validateForm(this.email,this.password)){
      this.authservice.registerWithEmail(this.email,this.password)
        .then(()=>{
          this.message = "you are registered"
          alert("Successfully Registered")
          this.router.navigate(['/login'])
        }).catch((_error)=>{
          this.error = _error
          this.router.navigate(['/register'])
        })
    }

  }
  validateForm(email,password)
  {
    if(email.length === 0)
    {
      this.errorMessage = "please enter email id";
      return false;
    }
    if(password.length === 0)
    {
      this.errorMessage = "please enter password";
      return false;
    }

    if(password.length < 6)
    {
      this.errorMessage = "password should be atleast 6 characters";
      return false;
    }

    this.errorMessage='';
    return true;
  }


}
