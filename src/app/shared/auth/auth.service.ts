import { Injectable } from '@angular/core';
import {
  AuthService as SocialAuthService,
  SocialUser
} from 'angularx-social-login';

@Injectable()
export class AuthService {
  token: string;

  constructor(
    private socialAuthService: SocialAuthService,
    private user: SocialUser
  ) {}

  signupUser(email: string, password: string) {
    // your code for signing up the new user
  }

  signinUser(email: string, password: string) {
    // your code for checking credentials and getting tokens for for signing in user
  }

  logout() {
    this.token = null;
    this.socialAuthService.signOut();
  }

  getToken() {
    return this.token;
  }

  getUser(): object {
    return JSON.parse(localStorage.getItem('__u'));
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('__u') ? true : false;
  }
}
