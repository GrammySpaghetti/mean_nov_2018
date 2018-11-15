import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details_id: Number;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      console.log(`The parent params: ${params.id}`);
      this.details_id = params.id;
    });

  }

}
