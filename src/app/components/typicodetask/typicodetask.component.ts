import { Component, OnInit } from '@angular/core';
import { tasks } from 'src/app/const/task';
import { ITask } from 'src/app/interfaces/task';

@Component({
  selector: 'app-typicodetask',
  templateUrl: './typicodetask.component.html',
  styleUrls: ['./typicodetask.component.scss']
})
export class TypicodetaskComponent implements OnInit {

  taskArr : Array<ITask> = []
  ngOnInit(): void {

    this.taskArr = tasks;
    console.log(this.taskArr);
    
  }

}
