import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';
import { SearchResponse } from '../../models/search-response.model';
import { Item } from '../../models/search-item.model';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  private readonly SEARCH_URL: string = 'search?';
  private readonly SEARCH_VIDEO: string = 'videos';

  constructor(private http: HttpClient) { }

  public getList(
    textInput: string = '',
    maxItems: string = '2'
  ): Observable<SearchResponse> {
    const params: HttpParams = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', maxItems)
      .set('q', textInput)
    return this.http.get<SearchResponse>(`${this.SEARCH_URL}`, {params})
      .pipe(
        map((response: SearchResponse) => {
          const itemsId = response.items
          .map((item) => item.id.videoId)
          .join(',')
          return itemsId
        }),
        mergeMap((itemsId) => {
          const params: HttpParams = new HttpParams()
            .set('id', itemsId)
            .set('part', 'snippet,statistics')
          return this.http.get<SearchResponse>(`${this.SEARCH_VIDEO}`, {params});
        }),
      )
  }

  getItemById(id: string): Observable<Item[]> {
    const params = new HttpParams()
      .set('part', 'snippet,statistics')
      .set('id', id);
    return this.http.get<SearchResponse>(`${this.SEARCH_VIDEO}`, {params})
      .pipe(
          map((response) => response.items),
      );
  }
}
