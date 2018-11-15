import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category_name: String;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      console.log(`The params: ${params.cat}`);
      this.category_name = params.cat;
    })
  }

}
