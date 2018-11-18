import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  burbankWeather(){
    console.log('here');
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Burbank,usa&&APPID=de02be9a7bc4502cc6440f3dd3d4e1d7');
  }
  chicagoWeather(){
    console.log('here');
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Chicago,usa&&APPID=de02be9a7bc4502cc6440f3dd3d4e1d7');
  }
  DallasWeather(){
    console.log('here');
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Dallas,usa&&APPID=de02be9a7bc4502cc6440f3dd3d4e1d7');
  }
  dcWeather(){
    console.log('here');
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Washington, D.C.,usa&&APPID=de02be9a7bc4502cc6440f3dd3d4e1d7');
  }
  sanjoseWeather(){
    console.log('here');
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=San Jose,usa&&APPID=de02be9a7bc4502cc6440f3dd3d4e1d7');
  }
  seattleWeather(){
    console.log('here');
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Seattle,usa&&APPID=de02be9a7bc4502cc6440f3dd3d4e1d7');
  }
}
