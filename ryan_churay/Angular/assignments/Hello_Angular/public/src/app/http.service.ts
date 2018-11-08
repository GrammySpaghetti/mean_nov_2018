import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    this.taskID();
  }
  getTasks(){
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log('Got our tasks!', data));
  }
  taskID(){
    let tempObservable = this._http.get('/tasks/5be377c286a517056deb66d8');
    tempObservable.subscribe(data => console.log('Got the task by ID!', data));
  }
}
