import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth/auth-guard.service';
import { GuestGuard } from './shared/auth/guest-guard.service';

import { LoginPageComponent } from './features/login/login-page.component';
import { RegisterPageComponent } from './features/register/register-page.component';
import { ForgotPasswordPageComponent } from './features/forgot-password/forgot-password-page.component';
import { MaintenancePageComponent } from './features/maintenance/maintenance-page.component';
import { ErrorPageComponent } from './features/error/error-page.component';
import { ComingSoonPageComponent } from './features/coming-soon/coming-soon-page.component';
import { TermsPageComponent } from './features/terms/terms-page.component';
import { PrivacyPageComponent } from './features/privacy/privacy-page.component';
import { DisclaimerPageComponent } from './features/disclaimer/disclaimer-page.component';
import { HomePageComponent } from './features/home/home-page.component';
import { UserProfilePageComponent } from './features/user-profile/user-profile-page.component';

const routes: Routes = [
  // Authenticated user routes
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: UserProfilePageComponent, canActivate: [AuthGuard] },

  // Guest routes
  {
    path: 'login',
    canActivate: [GuestGuard],
    component: LoginPageComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: 'register',
    canActivate: [GuestGuard],
    component: RegisterPageComponent,
    data: {
      title: 'Register'
    }
  },
  {
    path: 'forgot-password',
    canActivate: [GuestGuard],
    component: ForgotPasswordPageComponent,
    data: {
      title: 'Forgot Password'
    }
  },

  // Common routes
  {
    path: 'terms',
    component: TermsPageComponent,
    data: {
      title: 'Terms and Condition'
    }
  },
  {
    path: 'privacy',
    component: PrivacyPageComponent,
    data: {
      title: 'Privacy Policy'
    }
  },
  {
    path: 'disclaimer',
    component: DisclaimerPageComponent,
    data: {
      title: 'Disclaimer'
    }
  },
  {
    path: 'maintenance',
    component: MaintenancePageComponent,
    data: {
      title: 'Maintenance'
    }
  },
  {
    path: 'coming-soon',
    component: ComingSoonPageComponent,
    data: {
      title: 'Coming Soon'
    }
  },
  {
    path: 'error',
    component: ErrorPageComponent,
    data: {
      title: 'Error'
    }
  },
  {
    path: '**',
    component: ErrorPageComponent,
    data: {
      title: 'Error'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
