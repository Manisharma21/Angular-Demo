import { Injectable } from '@angular/core';
import {Http , Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class FlightsService {

  constructor(private http: Http) { }
  getData():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .map((response : Response) => response.json());
  }
}
