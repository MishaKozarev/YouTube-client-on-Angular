import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProfileAction } from 'src/app/store/actions/profile.actions';
import { selectProfile } from 'src/app/store/selectors/profile.selectors';

import { ProfileService } from '../../services/profile/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  profile$ = this.store.select(selectProfile);

  constructor(
    private profileService: ProfileService,
    private store: Store
  ) {}
  ngOnInit(): void {
    this.store.dispatch(getProfileAction());
  }
}
