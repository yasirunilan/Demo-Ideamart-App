import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {AuthService} from '../services/auth.service';
import {MessageService} from '../message.service';


export class Message {
  id: number;
  text: string;
}
@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent implements OnInit {

  private user: Observable<firebase.User>;
  title = 'This is the app';
  message: Message = {
    id: 1,
    text: 'Windstorm'
  };

  clickMessage = '';
  messages: any = [];

  constructor(public authService: AuthService, private messageService: MessageService) { }

  ngOnInit() {
    // Retrieve messages from the API
    this.messageService.getAllMessages().subscribe(messages => {
      this.messages = messages;
    });
  }
  onClickMe() {
    this.clickMessage = this.message.text;
    this.messageService.saveMessage(this.message).subscribe(
      data => {
      // refresh the list
        this.messageService.getAllMessages();
      return true;
    },
      error => {
        console.error('Error saving food!');
        return Observable.throw(error);
      });
  }
  logout() {
    this.authService.logout();
  }

}
