import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PricelistService {

  private _url = '/assets/jsonmenu/menu.json';

  constructor(public _http: Http){}

  getLists(){
    return this._http.get(this._url).map((response: Response) => response.json());
  }
}
