import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private route: Router) {}

  public routingToSignUp() {
    this.route.navigate(['/signup']);
  }
  public routingToSignIn() {
    this.route.navigate(['/signin']);
  }
  public routingToMain() {
    this.route.navigate(['/main']);
  }
  public routingToProfile() {
    this.route.navigate(['/profile']);
  }
  public routingToGroup() {
    this.route.navigate(['/group']);
  }
  public routingToConversation() {
    this.route.navigate(['/conversation']);
  }
}
