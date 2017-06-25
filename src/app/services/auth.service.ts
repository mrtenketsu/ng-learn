
import { Injectable } from "@angular/core";
import * as firebase from 'firebase';


@Injectable()
export class AuthService {

  token: string;

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }

  signinUser(email: string, password: string, action: () => void) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase.auth().currentUser.getToken().then( token => this.token = token);
        action();
      })
      .catch(error => console.log(error));
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    if (firebase.auth().currentUser != null)
      firebase.auth().currentUser.getToken().then( token => this.token = token);

    return this.token;
  }

  isAuthenticated() : boolean {
    return this.token != null;
  }

}