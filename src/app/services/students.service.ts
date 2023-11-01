import { Istudent } from './../models/istudent';
import { Injectable } from '@angular/core';

import { studentlist } from '../models/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students:Istudent[];

  constructor() { 
    this.students = studentlist;
  }
  getAll():Istudent[]{
   return this.students
  }
  getById(id:number):Istudent|undefined{
    return this.students.find(s=>s.id == id);
  }
  edit(id:number, s:Istudent):void{
    let index = this.students.findIndex(s=>s.id == id);
    this.students[index].name = s.name; 
    this.students[index].address = s.address; 
    this.students[index].age = s.age; 
    this.students[index].gender = s.gender; 
  }
  delete(id:number){
    let index = this.students.findIndex(s=>s.id == id);
    if(index !=-1){
    this.students.splice(index,1)
    }

    }
    add(s:Istudent):void{
      let nextid = studentlist[studentlist.length-1].id +1;
      this.students.push(s);
    }
  }

