import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Task Manager';
  all_tasks_title = 'All Tasks';
  all_tasks = [];
  task_title = 'Task by ID';
  task = {};
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getTasks();
    this.getID();
  }

  getTasks(){
    let obs1 = this._httpService.getTasks();
    obs1.subscribe(data => {
      // console.log('got tasks!', data)
      this.all_tasks = data['data'];
      console.log(this.all_tasks);
    });
  }

  getID(){
    let obs2 = this._httpService.taskID();
    obs2.subscribe(data => {
      console.log('got by id', data)
      this.task = data['data'];
      console.log(this.task);
    });
  }

  



}
