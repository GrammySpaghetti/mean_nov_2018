import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product: Object;
  err_name: Object;
  err_img: Object;
  err_price: Object;
  err: Object[];

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.product = {name: '', price: '', img: ''};
    this.err_name = {};
    this.err_img= {};
    this.err_price = {};
    this.err = [];
// this.err_name, this.err_img, this.err_price
  }

  newProduct(product){
    this.product = {name: product.name, price: product.price, img: product.img};
    this.err = [];
    console.log('new product information', product)
    let obs = this._httpService.newProduct(this.product);
    obs.subscribe(data => {
      console.log('new product', data);
      if(data['err'] != null){
        this.err_name = {message: data['err']['errors']['name']};
        this.err_img = {message: data['err']['errors']['img']};
        this.err_price = {message: data['err']['errors']['price']};
        this.err = [this.err_name, this.err_img, this.err_price];
        console.log(this.err);
      }
      else{
        this._router.navigate(['/products']);
      }
    });
  }

}
