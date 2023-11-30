import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '@shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SigninPageComponent } from './auth/pages/signin-page/signin-page.component';
import { SignupPageComponent } from './auth/pages/signup-page/signup-page.component';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';
import { HeaderComponent } from './core/components/header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [AppComponent, SignupPageComponent, SigninPageComponent, NotFoundPageComponent, HeaderComponent, MainPageComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
