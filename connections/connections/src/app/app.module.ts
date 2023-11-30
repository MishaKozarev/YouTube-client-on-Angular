import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '@shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { HeaderComponent } from './core/components/header/header.component';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';
import { ConversationPageComponent } from './pages/conversation-page/conversation-page.component';
import { GroupPageComponent } from './pages/group-page/group-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    HeaderComponent,
    MainPageComponent,
    ProfilePageComponent,
    GroupPageComponent,
    ConversationPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, AuthModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
