import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';

import { Item } from '../../models/search-item.model';
import { DetailsService } from '../../services/details/details.service';
import { SearchResultService } from '../../services/search-result/search-result.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  currentItem!: Item;
  id = '';
  publishData = '';

  constructor(
    public service: DetailsService,
    public resultsService: SearchResultService,
    public router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService
  ) {}
  ngOnInit(): void {
    if (!this.loginService.isUserAuthenticated) {
      this.router.navigate(['/login']);
    }
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.service.setVideoInfo(this.id);
    this.publishData = this.service.publishDate;
    const item = this.resultsService.getItemById(this.id);
    if (item) {
      this.currentItem = item;
    }
  }
}
