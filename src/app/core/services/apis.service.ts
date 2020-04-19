import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(public http: HttpClient) { }

  // success fetch
  fetchSuccess() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  // error fetch
  fetchError() {
    return this.http.get('https://jsoasdasnplaceholder.typicode.com/todos/1');
  }

}
