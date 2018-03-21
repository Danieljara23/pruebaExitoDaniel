import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class NewsService {

  private  _url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1b13ca21cd1742c78f34609b939503a2";

  constructor(public _http: HttpClient) {
    console.log("Servicio News Listo");
   }

  getNoticias(){

    return this._http.get(this._url)
        .map((response: Response) => response);
  }
}
