import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather: Object;

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.seattleW();
  }
  seattleW(){
    let obs = this._httpService.seattleWeather();
    obs.subscribe(data => {
      console.log('getting response')
      this.weather = data;
      console.log(this.weather);
    })
  }

}