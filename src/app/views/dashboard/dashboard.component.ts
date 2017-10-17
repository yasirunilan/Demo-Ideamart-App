import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';


export class Message {
  id: number;
  text: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private user: Observable<firebase.User>;
  title = 'This is the app';
  message: Message = {
    id: 1,
    text: 'Windstorm'
  };

  clickMessage = '';

  onClickMe() {
    this.clickMessage = this.message.text;
  }
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
