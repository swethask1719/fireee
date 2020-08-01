import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }
  register(){

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
