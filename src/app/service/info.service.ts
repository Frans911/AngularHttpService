import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http:Http) { }

  getInfo(){
    return this.http.get(`https://conduit.productionready.io/api/profiles//eric`)
  }
}
