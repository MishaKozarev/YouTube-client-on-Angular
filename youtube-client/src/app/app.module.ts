import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { CardIconComponent } from './components/search/search-item/card-icon/card-icon.component';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SearchResultsComponent } from './components/search/search-result/search-results.component';
import { BorderColorDirective } from './directive/border-color.directive';
import { SortDatePipe } from './pipes/sort-date/sort-date.pipe';
import { SortViewPipe } from './pipes/sort-view/sort-view.pipe';
import { SortWordPipe } from './pipes/sort-word/sort-word.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    FilterComponent,
    BorderColorDirective,
    SortDatePipe,
    SortViewPipe,
    SortWordPipe,
    CustomButtonComponent,
    CardIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    LogoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
