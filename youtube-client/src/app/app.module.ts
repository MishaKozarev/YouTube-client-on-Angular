import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { YoutubeModule } from './youtube/youtube.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FilterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YoutubeModule,
    BrowserAnimationsModule,
    SharedModule,
    LogoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
