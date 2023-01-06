import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const MENU_ITEMS = {
  users: 'users',
  userDetails: 'users/details',
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {
    console.log('header constructor');
  }

  public ngOnInit(): void {
    console.log('header init');
  }

  public goToPageByMenuItem(selected: string): void {
    Object.values(MENU_ITEMS).map((item) => {
      if (item === selected) {
        this.router.navigate([`/${item}`]);
      }
    });
  }
}
