import { StudentsService } from 'src/app/services/students.service';
import { Component, OnInit } from '@angular/core';
import { Istudent } from 'src/app/models/istudent';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  student:Istudent ={
    id:0,
    name:"",
    address:"",
    age:0,
    gender:""
  }
  StdId:number = 0
  constructor(private stdservice:StudentsService, private router:Router, private activatedroute: ActivatedRoute)
  {}
  ngOnInit(): void {
    this.StdId = this.activatedroute.snapshot.params['id'];
    if(this.StdId!=0){
      let prod = this.stdservice.getById(this.StdId);
      if (prod) this.student = prod; 
  }


}
Getdata(e : Event){
  e.preventDefault();
  console.log(this.student);
 if (this.StdId){
  this.stdservice.edit(this.StdId, this.student)

 }else{
  this.stdservice.add(this.student)
 }

  this.router.navigate(['/student']);

}

}
