import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfilePageComponent implements OnInit {
  // Variable Declaration
  currentPage = 'TimeLine';
  profile: any;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initProfileData();
    this.initPageTitle();
  }

  showPage(page: string) {
    this.currentPage = page;
  }

  private initProfileData(): void {
    this.profile = this.route.snapshot.data.profile;
  }

  /**
   * Initialize Page title
   */
  private initPageTitle(): void {
    const appTitle = this.titleService.getTitle();
    this.titleService.setTitle(this.profile.name + ' | ' + appTitle);
  }
}
