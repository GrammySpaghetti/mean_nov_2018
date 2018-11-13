import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private _http: HttpClient) {
    test();
  }

  test() {
    return this._http.post('/game', {test: 'fgjhrkdfhkd'});
  }

}
