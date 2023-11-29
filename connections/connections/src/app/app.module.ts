import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupPageComponent } from './auth/pages/signup-page/signup-page.component';
import { SigninComponent } from './auth/pages/signin/signin.component';

@NgModule({
  declarations: [AppComponent, SignupPageComponent, SigninComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
