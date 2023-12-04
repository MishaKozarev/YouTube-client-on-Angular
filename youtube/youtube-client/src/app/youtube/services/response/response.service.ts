import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, switchMap, tap } from 'rxjs';

import { paginationAddInfoAction } from '../../../store/actions/pagination/pagination.actions';
import { Item } from '../../models/search-item.model';
import VideoItems, { SearchResponse } from '../../models/search-response.model';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  public SEARCH_URL: string = 'search?';
  public SEARCH_VIDEO: string = 'videos?';

  constructor(
    private http: HttpClient,
    private store: Store
  ) {}

  public getList(textInput: string = '', maxItems: string = '20') {
    const params: HttpParams = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', maxItems)
      .set('q', textInput);
    return this.http.get<SearchResponse>(`${this.SEARCH_URL}`, { params }).pipe(
      tap((searchResponse) => this.savePagesToken(searchResponse)),
      map((response: SearchResponse) => {
        const itemsId = response.items.map((item) => item.id.videoId).join(',');
        return itemsId;
      }),
      switchMap((itemsId) => {
        return this.http.get<VideoItems>(
          `${this.SEARCH_VIDEO}&id=${itemsId}&part=snippet,statistics`
        );
      })
    );
  }

  public getVideosOnPage(query: string, token: string, maxResults = 20) {
    const params: HttpParams = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', maxResults)
      .set('q', query)
      .set('pageToken', token);
    return this.http.get<SearchResponse>(`${this.SEARCH_URL}`, { params }).pipe(
      tap((searchResponse) => this.savePagesToken(searchResponse)),
      map((videoResponse: SearchResponse) => {
        const videoItemsIds: string = videoResponse.items
          .map((items) => items.id.videoId)
          .join(',');
        return videoItemsIds;
      }),
      switchMap((videoItemsIds) => {
        return this.http.get<VideoItems>(
          `${this.SEARCH_VIDEO}&id=${videoItemsIds}&part=snippet,statistics`
        );
      })
    );
  }

  private savePagesToken(searchResponse: SearchResponse) {
    const { nextPageToken, prevPageToken } = searchResponse;
    this.store.dispatch(
      paginationAddInfoAction({
        info: {
          nextPageToken: nextPageToken || '',
          prevPageToken: prevPageToken || ''
        }
      })
    );
  }

  getItemById(id: string): Observable<Item[]> {
    const params = new HttpParams()
      .set('part', 'snippet,statistics')
      .set('id', id);
    return this.http
      .get<VideoItems>(`${this.SEARCH_VIDEO}`, { params })
      .pipe(map((response) => response.items));
  }
}