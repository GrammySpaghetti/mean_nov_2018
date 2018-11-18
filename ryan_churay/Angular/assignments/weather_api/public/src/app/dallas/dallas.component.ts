import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weather: Object;

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.chicagoW();
  }
  chicagoW(){
    let obs = this._httpService.chicagoWeather();
    obs.subscribe(data => {
      console.log('getting response')
      this.weather = data;
      console.log(this.weather);
    })
  }

}
