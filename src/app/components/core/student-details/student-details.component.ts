import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Istudent } from 'src/app/models/istudent';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent  implements OnInit{
  studid:number = 0;
  student:Istudent|undefined;
  constructor(private studentservice: StudentsService, private activateroute: ActivatedRoute ){}
  ngOnInit(): void {
   this.studid = this.activateroute.snapshot.params['id'];
   this.student = this.studentservice.getById(this.studid);
  }


}
