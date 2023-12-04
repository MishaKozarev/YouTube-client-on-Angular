import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginService } from '../../../auth/services/login.service';
import { Item } from '../../models/search-item.model';
import { ResponseService } from '../../services/response/response.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  currentItem!: Item;
  currentId = '';
  public isAuthUser$ = this.loginService.isAuth$;
  public isAuthUser!: boolean;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public responseService: ResponseService,
    private loginService: LoginService
  ) {}
  ngOnInit(): void {
    this.isAuthUser$.subscribe((value) => {
      this.isAuthUser = value;
    });
    if (!this.isAuthUser) {
      this.router.navigate(['/login']);
    }
    this.activatedRoute.params.subscribe((params) => {
      this.currentId = params['id'];
    });

    this.responseService.getItemById(this.currentId).subscribe({
      next: ([item]) => {
        if (item) {
          this.currentItem = item;
        }
      }
    });
  }
}
