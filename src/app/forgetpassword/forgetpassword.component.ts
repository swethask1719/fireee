import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  email: any;

  constructor(private af:AngularFireAuth) { }

  ngOnInit() {
  }

  reset()
  {
    this.af.sendPasswordResetEmail(this.email).then(()=>{
      alert('email sent');
    }).catch((_error)=>{
      console.log(_error);
    })
  }

}
