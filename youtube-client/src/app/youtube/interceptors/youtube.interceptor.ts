import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class YoutubeInterceptorService implements HttpInterceptor {
  private readonly API_KEY: string = 'AIzaSyB6qOZ7GR8hZ-gXAvQzsDDfUofhn8k1p9Q';
  private readonly YOUTUBE_LINK: string =
    'https://www.googleapis.com/youtube/v3';
  intercept(
    req: HttpRequest<string>,
    next: HttpHandler
  ): Observable<HttpEvent<string>> {
    return next.handle(
      req.clone({
        url: `${this.YOUTUBE_LINK}/${req.url}`,
        setParams: { key: this.API_KEY }
      })
    );
  }
}
