import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/auth/services/login.service';
import { SearchFormService } from 'src/app/youtube/services/search-form/search-form.service';
import { ShowFilterBlockService } from 'src/app/youtube/services/show-filter-block/show-filter-block.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private searchFormService: SearchFormService,
    private showFilterBlockService: ShowFilterBlockService
  ) {}

  public isShow: boolean = this.showFilterBlockService.showFilterBlock;
  public isAuntUser$: Observable<boolean> = this.loginService.isAuth$;
  public isAuntUser!: boolean;
  public buttonLogTextContent$: Observable<string> =
    this.loginService.btnTextContent$;

  ngOnInit(): void {
    this.isAuntUser$.subscribe((value) => {
      this.isAuntUser = value;
    });
  }

  public logout(): void {
    if (this.isAuntUser) {
      this.loginService.logout();
      this.router.navigate(['/login']);
    }
  }

  public changeInputValue(query: string): void {
    this.searchFormService.changeQuery(query, 3);
  }

  public sendFormInfo(query: string): void {
    this.searchFormService.changeQuery(query, 0);
  }
}
