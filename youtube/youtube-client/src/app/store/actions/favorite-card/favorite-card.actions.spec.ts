import { Item } from 'src/app/youtube/models/search-item.model';

import { FavoriteCardActionTypes } from '../../actions-type/favorite-card-actions';
import { addFavoriteCard, deleteFavoriteCard } from './favorite-card.actions';

describe('Favorite Card Actions', () => {
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
  const mockId = 'mockId';

  it('should create an action to add a favorite card', () => {
    const action = addFavoriteCard({ card: mockItem });
    expect({ ...action }).toEqual({
      type: FavoriteCardActionTypes.ADD_FAVORITE_CARD,
      card: mockItem
    });
  });

  it('should create an action to delete a favorite card', () => {
    const action = deleteFavoriteCard({ id: mockId });
    expect({ ...action }).toEqual({
      type: FavoriteCardActionTypes.DELETE_FAVORITE_CARD,
      id: mockId
    });
  });
});
