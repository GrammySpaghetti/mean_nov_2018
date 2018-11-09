import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    this.taskID();
    this.trivia();
    this.get50();
  }
  getTasks(){
    let tempObservable1 = this._http.get('/tasks');
    tempObservable1.subscribe(data => console.log('Got our tasks!', data));
  }
  taskID(){
    let tempObservable2 = this._http.get('/tasks/5be377c286a517056deb66d8');
    tempObservable2.subscribe(data => console.log('Got the task by ID!', data));
  }
  trivia(){
    let tempObservable3 = this._http.get('https://opentdb.com/api_category.php');
    tempObservable3.subscribe(data => {
      console.log('Here are the trivia categories', data);
      this.triviaCatId(data);
    });
  }
  get50(){
    let tempObservable4 = this._http.get('https://opentdb.com/api.php?amount=50');
    tempObservable4.subscribe(data => console.log('50 random trivia questions', data));
  }
  triviaCatId(data){
    let category = data.trivia_categories[0].id;
    let tempObservable5 = this._http.get(`https://opentdb.com/api.php?amount=10&category=${category}`);
    console.log(category);
    tempObservable5.subscribe(data => console.log('category based on id', data));
  }
}
