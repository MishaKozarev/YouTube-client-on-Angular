import { Item } from 'src/app/youtube/models/search-item.model';

import { YoutubeCardActionTypes } from '../../actions-type/youtube-actions-type';
import {
  youtubeAddCardAction,
  youtubeAddCardsAction,
  youtubeClearCardsAction,
  youtubeSearchAction,
  youtubeSearchOnPageAction
} from './youtube-card.actions';

describe('Youtube Actions', () => {
  it('should create youtubeAddCardAction', () => {
    const mockCard: Item = {
      etag: 'CustomCard',
      id: '',
      snippet: {
        publishedAt: 'this.adminForm.value.date',
        title: 'this.adminForm.value.title',
        description: 'this.adminForm.value.description',
        thumbnails: {
          high: {
            url: 'this.adminForm.value.link',
            width: 480,
            height: 360
          },
          default: {
            url: 'this.adminForm.value.link',
            width: 480,
            height: 360
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
    const action = youtubeAddCardAction({ youtubeCards: mockCard });
    expect(action.type).toEqual(YoutubeCardActionTypes.ADD_CARD);
    expect(action.youtubeCards).toEqual(mockCard);
  });

  it('should create youtubeAddCardsAction', () => {
    const mockCards: Item[] = [
      {
        etag: 'CustomCard',
        id: '',
        snippet: {
          publishedAt: 'this.adminForm.value.date',
          title: 'this.adminForm.value.title',
          description: 'this.adminForm.value.description',
          thumbnails: {
            high: {
              url: 'this.adminForm.value.link',
              width: 480,
              height: 360
            },
            default: {
              url: 'this.adminForm.value.link',
              width: 480,
              height: 360
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
      }
    ];
    const action = youtubeAddCardsAction({ youtubeCards: mockCards });
    expect(action.type).toEqual(YoutubeCardActionTypes.ADD_CARDS);
    expect(action.youtubeCards).toEqual(mockCards);
  });

  it('should create youtubeClearCardsAction', () => {
    const action = youtubeClearCardsAction();
    expect(action.type).toEqual(YoutubeCardActionTypes.CLEAR);
  });

  it('should create youtubeSearchAction', () => {
    const mockQuery = 'search query';
    const mockQueryLength = 10;
    const action = youtubeSearchAction({
      query: mockQuery,
      queryLength: mockQueryLength
    });
    expect(action.type).toEqual(YoutubeCardActionTypes.SEARCH_QUERY);
    expect(action.query).toEqual(mockQuery);
    expect(action.queryLength).toEqual(mockQueryLength);
  });

  it('should create youtubeSearchOnPageAction', () => {
    const mockQuery = 'search query';
    const mockToken = 'page token';
    const action = youtubeSearchOnPageAction({
      query: mockQuery,
      token: mockToken
    });
    expect(action.type).toEqual(YoutubeCardActionTypes.SEARCH_ON_PAGE);
    expect(action.query).toEqual(mockQuery);
    expect(action.token).toEqual(mockToken);
  });
});
