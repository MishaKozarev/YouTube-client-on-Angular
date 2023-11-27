import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginService } from '../../../auth/services/login.service';
import { youtubeSearchAction } from '../../../store/actions/youtube-card.actions';
import { ShowFilterBlockService } from '../../../youtube/services/show-filter-block/show-filter-block.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isShow: boolean = this.showFilterBlockService.showFilterBlock;
  public isAuntUser$: Observable<boolean> = this.loginService.isAuth$;
  public isAuntUser!: boolean;
  public loginTextBtn = 'login';
  public logoutTextBtn = 'logout';
  public searchQuery = '';

  constructor(
    private loginService: LoginService,
    private router: Router,
    private showFilterBlockService: ShowFilterBlockService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.isAuntUser$.subscribe((value) => {
      this.isAuntUser = value;
    });
  }

  public logout(): void {
    if (this.isAuntUser) {
      this.loginService.logout();
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  public routingAdminPage(): void {
    this.router.navigate(['/admin']);
  }

  public changeInputValue(query: string): void {
    localStorage.setItem('Query', query);
    this.store.dispatch(youtubeSearchAction({ query, queryLength: 3 }));
  }

  public sendFormInfo(query: string): void {
    localStorage.setItem('Query', query);
    this.store.dispatch(youtubeSearchAction({ query, queryLength: 0 }));
  }

  public routingFavoritePage(): void {
    this.router.navigate(['/favorite']);
  }

  public routingYoutubePage(): void {
    this.router.navigate(['/youtube']);
  }
}
