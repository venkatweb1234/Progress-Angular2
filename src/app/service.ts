import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {IResults} from './results';
import {Observable} from 'rxjs/Observable';
import  'rxjs/add/operator/map';


@Injectable()
export class BarService {
  constructor(private _http: Http){}
  getService(): Observable<IResults[]>
  {
    return this._http.get("http://pb-api.herokuapp.com/bars").map((res: Response) =><IResults[]> res.json());
    
  }
}
