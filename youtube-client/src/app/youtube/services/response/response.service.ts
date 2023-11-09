import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs';
import { SearchResponse } from '../../models/search-response.model';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  private readonly SEARCH_URL: string = 'search?';
  private readonly SEARCH_VIDEO: string = 'video?';
  constructor(
    private http: HttpClient
  ) { }
  link = 'https://www.googleapis.com/youtube/v3/search?';
  link2 = 'https://www.googleapis.com/youtube/v3/videos?';
  key = 'key=AIzaSyD36PxvMa8w4wNrP6pPrExAWS_B_aqi9p0';
  public getList(
    textInput: string = '',
    maxItems: string = '5'
  ) {
    const params: HttpParams = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxItems', maxItems)
      .set('q', textInput)
    return this.http.get<SearchResponse>(`${this.link}${this.key}`, {params})
      .pipe(
        map((videoResponse: SearchResponse) => {
          const videoItemsId = videoResponse.items
          .map((item) => item.id.videoId)
          .join(',')
          return videoItemsId
        }),
        switchMap((videoItemsId) => {
          return this.http.get<SearchResponse>(`${this.link2}${this.key}&id=${videoItemsId}&part=snippet,statistics`)
        })
      )
  }
}
