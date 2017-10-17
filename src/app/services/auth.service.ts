import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  public user: Observable<firebase.User>;
  public userDetails: firebase.User = null;
  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  signup(email: string, password: string) {
    this._firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    this._firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.router.navigate(['dashboard']);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }


  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    ).then((res) => {
      this.router.navigate(['dashboard']);
    }).catch((err) => console.log(err));
  }

  isLoggedIn() {
    if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }
}
