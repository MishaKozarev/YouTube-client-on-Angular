import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { SearchItemComponent } from './search-item.component';

describe('SearchItemComponent', () => {
  let component: SearchItemComponent;
  let fixture: ComponentFixture<SearchItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({})],
      declarations: [SearchItemComponent]
    });
    fixture = TestBed.createComponent(SearchItemComponent);
    component = fixture.componentInstance;
    component.item = {
      etag: 'CustomCard',
      id: '',
      snippet: {
        publishedAt: '',
        title: '',
        description: '',
        thumbnails: {
          high: {
            url: '',
            width: 0,
            height: 0
          },
          default: {
            url: '',
            width: 0,
            height: 0
          }
        },
        channelTitle: '',
        tags: []
      },
      statistics: {
        viewCount: '1',
        likeCount: '0',
        dislikeCount: '0',
        favoriteCount: '0',
        commentCount: '0'
      }
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
