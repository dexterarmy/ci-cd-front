import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }

  constructor(private http: HttpClient) { }

    submitStockData(data:object):Observable<object>{

      return this.http.post("http://localhost:3000/stock", data, this.httpOptions);
       
    }

    getStockData():Observable<object>{
      return this.http.get("http://localhost:3000/stock",this.httpOptions);
    }
 
}
