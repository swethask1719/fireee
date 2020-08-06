import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employee: any;

  constructor(private authservice:AuthService,private crudservice:CrudService) { }

  ngOnInit() {
    this.crudservice.get_Allemployee().subscribe(data => {
      this.employee = data.map(e =>{
        return{
          id: e.payload.doc.id,
          isEdit: false,
          name: e.payload.doc.data()['name'],
          age: e.payload.doc.data()['age'],
          Address: e.payload.doc.data()['Address'],
        };
      })

      console.log(this.employee);

    });
  }
 

  

  Deleteemployee(record_id)
  {
    this.crudservice.delete_employee(record_id);
    alert("Are you sure you are deleting")
  }

}
