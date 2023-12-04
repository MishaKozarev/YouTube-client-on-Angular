import { PaginationActionsType } from '../../actions-type/pagination-action-type';
import {
  paginationAddInfoAction,
  paginationChangePageAction
} from './pagination.actions';

describe('Pagination Actions', () => {
  it('should create the paginationAddInfoAction action', () => {
    const info = {
      nextPageToken: 'QQww88',
      prevPageToken: 'EEdd99',
      page: 1
    };
    const action = paginationAddInfoAction({ info });

    expect(action.type).toEqual(PaginationActionsType.ADD_TOKEN);
    expect(action.info).toEqual(info);
  });

  it('should create the paginationChangePageAction action', () => {
    const page = 2;
    const action = paginationChangePageAction({ page });

    expect(action.type).toEqual(PaginationActionsType.CHANGE_PAGE);
    expect(action.page).toEqual(page);
  });
});
