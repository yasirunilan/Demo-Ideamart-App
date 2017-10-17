import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class SubscribersService {

  constructor(private http: Http) { }

  // Get all subscribers from the API
  getAllSubscribers() {
    return this.http.get('/subscribers')
      .map(res => res.json());
  }

}
