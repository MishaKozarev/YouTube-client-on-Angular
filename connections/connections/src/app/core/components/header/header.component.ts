import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentTheme$: Observable<string> = this.themeService.stateTheme$;
  public currentTheme = localStorage.getItem('theme');

  constructor(
    private route: Router,
    private themeService: ThemeService
  ) {}
  ngOnInit(): void {
    this.currentTheme$.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }

  public routingToSignUp() {
    this.route.navigate(['/signup']);
  }
  public routingToSignIn() {
    this.route.navigate(['/signin']);
  }
  public routingToMain() {
    this.route.navigate(['']);
  }
  public routingToProfile() {
    this.route.navigate(['/profile']);
  }

  public switchTheme() {
    if (this.currentTheme === 'dark') {
      this.themeService.changeTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      this.themeService.changeTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  }
}
