import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSettingComponent } from './search-setting.component';

describe('SearchSettingComponent', () => {
  let component: SearchSettingComponent;
  let fixture: ComponentFixture<SearchSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchSettingComponent]
    });
    fixture = TestBed.createComponent(SearchSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
