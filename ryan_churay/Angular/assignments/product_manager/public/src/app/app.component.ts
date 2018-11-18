import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'public';
  products: Object[];

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.products = [];
    // this.getProducts();
  }
  // getProducts(){
  //   console.log('Get Cakes function');
  //   let obs = this._httpService.getProducts();
  //   obs.subscribe(data => {
  //     console.log('got all products', data);
  //     this.products = data['data'];
  //     console.log(this.products);
  //   });
  // }
}
