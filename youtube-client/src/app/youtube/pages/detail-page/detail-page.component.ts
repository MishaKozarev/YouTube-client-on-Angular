import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
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

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public responseService: ResponseService,
    private loginService: LoginService
  ) {}
  ngOnInit(): void {
    if (!this.loginService.isUserAuthenticated) {
      this.router.navigate(['/login']);
    }
    this.activatedRoute.params.subscribe((params) => {
      this.currentId = params['id'];
    });

    this.responseService.getItemById(this.currentId).subscribe({
      next: ([item]) => {
        if (item) {
            this.currentItem = item;
        }}
    },
    )
  }
}
