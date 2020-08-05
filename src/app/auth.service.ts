import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState: any = null;
  constructor(private afu: AngularFireAuth,private router: Router) {
    this.afu.authState.subscribe((auth)=>{
      this.authState=auth;
    });
   }
   registerWithEmail(email:string, password: string)
  {
      return this.afu.createUserWithEmailAndPassword(email,password).then((user)=>{
        this.authState = user;
      }).catch((error)=>{
        console.log(error);
        throw error;
      })
  }
  loginWithEmail(email:string, password: string)
  {
    return this.afu.signInWithEmailAndPassword(email,password).then((user)=>{
      this.authState = user;
    }).catch((error)=>{
      console.log(error);
      throw error;
    })
  }
  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.uid : ''
  }

  get currentUserName(): string {
    return this.authState['email']
  }

  get currentUser(): any {
    return (this.authState !== null) ? this.authState : null;
  }
  logout(){
    this.afu.signOut();
    this.router.navigate(['/home']);
  }
}
