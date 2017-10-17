import { Component, OnInit } from '@angular/core';
import { SubscribersService } from '../subscribers.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit {

  subscribers: any = [];

  constructor(private subscribersService: SubscribersService) { }

  ngOnInit() {
    // Retrieve tasks from the API
    this.subscribersService.getAllSubscribers().subscribe(subscribers => {
      this.subscribers = subscribers;
    });
  }

}
