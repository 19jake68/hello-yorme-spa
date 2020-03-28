import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService, SocialUser } from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private socialAuthService: AuthService,
    private user: SocialUser
  ) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user: SocialUser) => {
      if (user) {
        this.user = user;
        localStorage.setItem('__u', JSON.stringify(this.user));
        this.router.navigate(['/home'], { relativeTo: this.route.parent });
      }
    });
  }

  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  // On submit button click
  onSubmit() {
    this.loginForm.reset();
  }

  // On Forgot password link click
  onForgotPassword() {
    this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
  }

  // On registration link click
  onRegister() {
    this.router.navigate(['register'], { relativeTo: this.route.parent });
  }
}
