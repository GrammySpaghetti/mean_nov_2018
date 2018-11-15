import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  // product: Number;
  // review: Number;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    // this.product = 0;
    // this.review = 0;
  }

  // showProducts(num){
  //   if(this.product == 0){
  //     this.product += num;
  //   }
  //   else{
  //     this.product = 0;
  //   }
  //   console.log(this.product);
  // }
  //
  // showReviews(num){
  //   if(this.review == 0){
  //     this.review += num;
  //   }
  //   else{
  //     this.review = 0;
  //   }
  //   console.log(this.review);
  // }
}
