import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfilePageComponent implements OnInit {
  // Variable Declaration
  currentPage = 'TimeLine';
  user: object;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.initUserData();
  }

  showPage(page: string) {
    this.currentPage = page;
  }

  private initUserData(): void {
    this.user = this.authService.getUser();
  }
}
