import { Item } from 'src/app/youtube/models/search-item.model';

import { CustomCardActionTypes } from '../../actions-type/custom-action-types';
import {
  createCustomCard,
  deleteCustomCard,
  getCustomCard
} from './custom-card.actions';

describe('Custom Actions', () => {
  it('should create a GET action', () => {
    const action = getCustomCard({ cardId: 'someCardId' });
    expect(action.type).toBe(CustomCardActionTypes.GET);
    expect(action.cardId).toBe('someCardId');
  });

  it('should create a CREATE action', () => {
    const mockItem: Item = {
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
    const action = createCustomCard({ customCards: mockItem });
    expect(action.type).toBe(CustomCardActionTypes.CREATE);
    expect(action.customCards).toBe(mockItem);
  });

  it('should create a DELETE action', () => {
    const action = deleteCustomCard({ id: 'someId' });
    expect(action.type).toBe(CustomCardActionTypes.DELETE);
    expect(action.id).toBe('someId');
  });
});
