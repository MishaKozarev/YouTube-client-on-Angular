import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectProfile } from 'src/app/store/selectors/profile.selectors';
import { ProfileData } from '../../models/profile-data';
import { ProfileService } from '../../services/profile/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  public profile$: Observable<ProfileData | null> | undefined;
  constructor(
    private profileService: ProfileService,
    private store: Store
  ) {}
  ngOnInit(): void {
    this.profile$ = this.store.select(selectProfile);
  }
  onSubmit() {
    this.profileService.sendProfileRequest().subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err)
    });
  }
}
