import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private fireService:AngularFirestore,private authService:AuthService) { }

  create_Newemployee(Record)
  { var owner=this.authService.authState;

    return this.fireService.collection('Users/'+owner.uid+'/Employee').add(Record);
  }
  get_Allemployee()
  {var owner=this.authService.authState;
    return this.fireService.collection('Users/'+owner.uid+'/Employee').snapshotChanges();
  }
}
