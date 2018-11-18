import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  weather: Object;

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.sanjoseW();
  }
  sanjoseW(){
    let obs = this._httpService.sanjoseWeather();
    obs.subscribe(data => {
      console.log('getting response')
      this.weather = data;
      console.log(this.weather);
    })
  }

}
