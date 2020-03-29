import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UserProfileResolver implements Resolve<object> {
  constructor(
    private authService: AuthService
  ) {}

  resolve() {
    return this.authService.getUser();
  }
}