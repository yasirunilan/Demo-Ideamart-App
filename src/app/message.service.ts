import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, Headers} from '@angular/http';

@Injectable()
export class MessageService {

  constructor(private http: Http) { }

  // Get all subscribers from the API
  getAllMessages() {
    return this.http.get('/messages')
      .map((res: Response) => res.json());
  }
  // Send message to API to save
  saveMessage(message) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const body = JSON.stringify(message);
    return this.http.post('/messages/message', body, options )
      .map((res: Response) => res.json());
  }

}
