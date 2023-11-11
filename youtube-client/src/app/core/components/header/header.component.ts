import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { SearchFormService } from 'src/app/youtube/services/search-form/search-form.service';
import { ShowFilterBlockService } from 'src/app/youtube/services/show-filter-block/show-filter-block.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    public loginService: LoginService,
    private router: Router,
    private searchFormService: SearchFormService,
    private showFilterBlockService: ShowFilterBlockService
  ) {}
  public isShow: boolean = this.showFilterBlockService.showFilterBlock;
  public search: string = '';

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
