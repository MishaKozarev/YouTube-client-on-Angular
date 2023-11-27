import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { FavoriteItemComponent } from './favorite-item.component';

describe('FavoriteItemComponent', () => {
  let component: FavoriteItemComponent;
  let fixture: ComponentFixture<FavoriteItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({})],
      declarations: [FavoriteItemComponent]
    });
    fixture = TestBed.createComponent(FavoriteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
