import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getProfileAction } from 'src/app/store/actions/profile.actions';
import { selectProfile } from 'src/app/store/selectors/profile.selectors';
import { UserProfile } from '../../models/profile-data';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  profile$: Observable<UserProfile | null> | undefined;
  // profile$ = this.store.select(selectProfile);

  constructor(
    private store: Store
  ) {}
  ngOnInit(): void {
    this.profile$ = this.store.pipe(select(selectProfile));
    this.store.dispatch(getProfileAction());
  }
}
