import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { SearchFormService } from 'src/app/youtube/services/search-form/search-form.service';
import { SearchResultService } from 'src/app/youtube/services/search-result/search-result.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private resultsService: SearchResultService,
    public loginService: LoginService,
    private router: Router,
    private searchFormService: SearchFormService
  ) {}
  public isShow: boolean = this.resultsService.showFilterBlock;
  public search: string = '';

  public handleShowResult(event: Event): void {
    this.resultsService.getIsShowSearchResultBlock(event);
  }
  public keyUpEnter(event: KeyboardEvent): void {
    if (this.search.length > 0 && event.code === 'Enter') {
      this.resultsService.getIsShowSearchResultBlock(event);
    }
  }
  public logOut = () => {
    if (this.loginService.isUserAuthenticated) {
      this.loginService.logOut();
      this.router.navigate(['']);
    }
  }

  public changeInputValue(query: string) {
    this.searchFormService.changeQuery(query, 3);
  }

  public sendFormInfo(query: string) {
    this.searchFormService.changeQuery(query, 0);
  }
}
