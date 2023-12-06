import { Component } from '@angular/core';

import { ProfileService } from '../../services/profile/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {
  constructor(private profileService: ProfileService) {}
  onSubmit() {
    this.profileService.sendProfileRequest().subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err)
    });
  }
}
