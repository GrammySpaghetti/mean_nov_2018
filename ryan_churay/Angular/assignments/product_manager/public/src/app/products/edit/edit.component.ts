import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: Object;
  product_id: Number;

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
     console.log(`The parent params: ${params}`);
     this.product_id = params.id;
    });
    this.product = {};
    this.getProductId();
  }

  getProductId(){
    let obs = this._httpService.getProductId(this.product_id);
    obs.subscribe(data => {
      console.log('product by id', data);
      this.product = data['data'];
    });
  }
  updateProduct(product){
    console.log('update please');
    let obs = this._httpService.updateProduct(product);
    obs.subscribe(data => {
      console.log('product update', data);

    })
    this._router.navigate(['/products']);
  }

  deleteProduct(product_id){
    let obs = this._httpService.deleteProduct(product_id);
    obs.subscribe(data => {
      console.log('deleted', data);
    });
    this._router.navigate(['/products']);

  }

}
