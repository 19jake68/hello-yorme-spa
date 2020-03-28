import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { AuthService } from './shared/auth/auth.service';
import { AuthGuard } from './shared/auth/auth-guard.service';
import { SocialLoginModule, AuthServiceConfig, LoginOpt, SocialUser } from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';

/* Components */
import { LoginPageComponent } from './features/login/login-page.component';
import { RegisterPageComponent } from './features/register/register-page.component';
import { ForgotPasswordPageComponent } from './features/forgot-password/forgot-password-page.component';
import { MaintenancePageComponent } from './features/maintenance/maintenance-page.component';
import { ErrorPageComponent } from './features/error/error-page.component';
import { ComingSoonPageComponent } from './features/coming-soon/coming-soon-page.component';
import { GuestGuard } from './shared/auth/guest-guard.service';
import { HomePageComponent } from './features/home/home-page.component';

const fbLoginOptions: LoginOpt = {
  scope: 'public_profile,email',
  return_scopes: true,
  enable_profile_selector: true
}; // https://developers.facebook.com/docs/reference/javascript/FB.login/v2.11

let config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("2836242799792425", fbLoginOptions)
  }
]);

export function provideConfig() {
  return config;
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ForgotPasswordPageComponent,
    MaintenancePageComponent,
    ErrorPageComponent,
    ComingSoonPageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgbModule.forRoot(),
    SocialLoginModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuard,
    GuestGuard,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    SocialUser
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
