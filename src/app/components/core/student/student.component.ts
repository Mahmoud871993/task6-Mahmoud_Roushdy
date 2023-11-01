import { StudentsService } from './../../../services/students.service';
import { studentlist } from './../../../models/students';
import { Component, OnInit } from '@angular/core';
import { Istudent } from 'src/app/models/istudent';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent  implements OnInit{
  students: Istudent[] = []


constructor(private studservice:StudentsService){}

  ngOnInit(): void {
   this.students= this.studservice.getAll();
  }
  delete(id:number)
  {
    let result = confirm("Do you want to remove this student?");
    if(result)
    {
      this.studservice.delete(id)
    }
  }
  

}
