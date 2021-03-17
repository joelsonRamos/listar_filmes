import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiKey:string
  url:string
  url2:string
  constructor(private http:HttpClient) {
    this.apiKey ='d1a39366';
    this.url = 'http://www.omdbapi.com/?apikey=';
    this.url2 = 'http://www.omdbapi.com/?i=';
   }

  buscarFilme(name: string): Promise<any>{
    return this.http.get(`${this.url}${this.apiKey}&s=${name}`).toPromise();
  }
  buscarId(id: string): Promise<any>{
    return this.http.get(`${this.url2}${id}&apikey=${this.apiKey}`).toPromise();

  }
}
