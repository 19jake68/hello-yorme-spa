import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService as SocialAuthService, SocialUser } from 'angularx-social-login';
import { Observable, Subscription } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {
  token: string;

  constructor(
    private socialAuthService: SocialAuthService,
    private user: SocialUser
  ) { }

  signupUser(email: string, password: string) {
    //your code for signing up the new user
  }

  signinUser(email: string, password: string) {
    //your code for checking credentials and getting tokens for for signing in user
  }

  logout() {
    this.token = null;
    this.socialAuthService.signOut();
  }

  getToken() {
    return this.token;
  }

  isAuthenticated(): boolean {
    console.log(this.user == null);
    return localStorage.getItem('__u') ? true : false;
  }
}
