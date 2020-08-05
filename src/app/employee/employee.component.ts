import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  name: string;
  age: number;
  address: string;
  message:string;
  constructor(private crudService:CrudService) { }

  ngOnInit() {
  }

  create(){

    let Record= {};

    Record['name']=this.name;
    Record['age']=this.age;
    Record['Address']=this.address;

    this.crudService.create_Newemployee(Record).then(res=>{
      this.name="";
        this.age=undefined;
        this.address="";
        alert("Employee created successfully")

        console.log(res);
    }).catch(error => {
      console.log(error);
  })

  }



}
