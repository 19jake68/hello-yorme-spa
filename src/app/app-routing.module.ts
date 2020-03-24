import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth/auth-guard.service';

import { ErrorPageComponent } from './features/error/error-page.component';
import { ComingSoonPageComponent } from './features/coming-soon/coming-soon-page.component';

const routes: Routes = [
  {
    path: '',
    component: ComingSoonPageComponent,
    pathMatch: 'full',
    data: {
      title: 'Coming Soon'
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
