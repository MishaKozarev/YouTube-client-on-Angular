import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupPageComponent } from './auth/pages/signup-page/signup-page.component';
import { SigninComponent } from './auth/pages/signin/signin.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [AppComponent, SignupPageComponent, SigninComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
