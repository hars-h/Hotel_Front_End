import { HttpClientModule } from '@angular/common/http';
//This is the service code:

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';





@Injectable({
  providedIn: 'root',
})

export class PicserviceService {
  

  private ROOT_URL = 'http://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPosts(){
  console.log("In pic service");  
  return this.http.get(`${this.ROOT_URL}/posts`);
  }


}
