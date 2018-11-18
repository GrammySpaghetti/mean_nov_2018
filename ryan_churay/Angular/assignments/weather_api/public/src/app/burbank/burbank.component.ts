import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather: Object;

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    
    this.burbankW();

  }

  burbankW(){
    let obs = this._httpService.burbankWeather();
    obs.subscribe(data => {
      console.log('getting response')
      this.weather = data;
      console.log(this.weather);
    })
  }

}
