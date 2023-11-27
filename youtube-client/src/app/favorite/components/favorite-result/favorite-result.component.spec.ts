import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { FavoriteResultComponent } from './favorite-result.component';

describe('FavoriteResultComponent', () => {
  let component: FavoriteResultComponent;
  let fixture: ComponentFixture<FavoriteResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({})],
      declarations: [FavoriteResultComponent]
    });
    fixture = TestBed.createComponent(FavoriteResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
