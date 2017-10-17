import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: Observable<firebase.User>;
  public email: string;
  public password: string;


  constructor(private _firebaseAuth: AngularFireAuth, private router: Router, public authService: AuthService) {
    this.user = _firebaseAuth.authState;
  }
  ngOnInit() {
  }
  signInWithGoogle() {
    this.authService.signInWithGoogle();
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }
}
