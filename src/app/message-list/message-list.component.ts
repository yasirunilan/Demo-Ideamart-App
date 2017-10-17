import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages: any = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    // Retrieve tasks from the API
    this.messageService.getAllMessages().subscribe(messages => {
      this.messages = messages;
    });
  }

}
