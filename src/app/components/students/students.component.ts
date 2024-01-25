import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/const/student';
import { Istudent } from 'src/app/interface/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit{

  studentsInfo : Array<Istudent> = []

  ngOnInit(): void {
    this.studentsInfo = student;
    console.log(this.studentsInfo);
    
  }

  

}
