import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { ResponseService } from './response.service';

describe('ResponseService', () => {
  let responseService: ResponseService;
  let httpClientSpy: { get: jest.Mock };
  let storeSpy: { dispatch: jest.Mock };

  beforeEach(() => {
    httpClientSpy = { get: jest.fn() };
    storeSpy = { dispatch: jest.fn() };
    responseService = new ResponseService(
      httpClientSpy as unknown as HttpClient,
      storeSpy as unknown as Store
    );
  });

  it('should be created', () => {
    expect(responseService).toBeTruthy();
  });

  it('should retrieve items from the api using query', () => {
    const textInput = 'test';
    const maxItems = '20';
    const responseMock = {};
    const store = {
      dispatch: jest.fn()
    };
    const dispatchSpy = jest.spyOn(store, 'dispatch');

    httpClientSpy.get.mockReturnValue(of(responseMock));

    responseService.getList(textInput, maxItems).subscribe((response) => {
      expect(response).toEqual(responseMock);
      expect(httpClientSpy.get).toHaveBeenCalledWith(
        `${responseService.SEARCH_URL}`,
        {
          params: expect.anything()
        }
      );
      expect(storeSpy.dispatch).toHaveBeenCalled();
      expect(dispatchSpy).toHaveBeenCalledWith(
        `${responseService.SEARCH_URL}`,
        {
          params: expect.anything()
        }
      );
    });
  });

  it('should retrieve items on a specific page from the api using query', () => {
    const query = 'test';
    const token = 'token';
    const maxResults = 20;
    const responseMock = {};

    httpClientSpy.get.mockReturnValue(of(responseMock));

    responseService
      .getVideosOnPage(query, token, maxResults)
      .subscribe((response) => {
        expect(response).toEqual(responseMock);
        expect(httpClientSpy.get).toHaveBeenCalledWith(
          `${responseService.SEARCH_URL}`,
          {
            params: expect.anything()
          }
        );
        expect(storeSpy.dispatch).toHaveBeenCalled();
      });
  });

  it('should retrieve an item by id from the api', () => {
    const id = '12345678';
    const responseMock = { items: [] };

    httpClientSpy.get.mockReturnValue(of(responseMock));

    responseService.getItemById(id).subscribe((response) => {
      expect(response).toEqual(responseMock.items);
      expect(httpClientSpy.get).toHaveBeenCalledWith(
        `${responseService.SEARCH_VIDEO}`,
        {
          params: expect.anything()
        }
      );
    });
  });
});
