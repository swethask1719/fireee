import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any;
  password: any;
  errorMessage= ""; //validation error handle

  error: {name:string,message:string} = {name: '' , message: ''};

  constructor(private authservice:AuthService,private router:Router) { }
  clearErrorMessage()
  {
    this.errorMessage = '';
    this.error = { name:'', message:''};
  }

  ngOnInit() {
  }

  login(){
    this.clearErrorMessage();
    if(this.validateForm(this.email,this.password))
    {
        this.authservice.loginWithEmail(this.email,this.password)
        .then(()=>{
          this.router.navigate(['/home'])
        }).catch((_error)=>{
          this.error = _error
          this.router.navigate(['/login'])
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
