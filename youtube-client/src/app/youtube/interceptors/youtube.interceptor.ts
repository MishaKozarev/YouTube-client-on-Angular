import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_KEY } from '../constants/youtube-api-key';
import { YOUTUBE_LINK } from '../constants/youtube-link';

@Injectable({
  providedIn: 'root'
})
export class YoutubeInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
    return next.handle(
      req.clone({
        url: `${YOUTUBE_LINK}/${req.url}`,
        setParams: {
          key: API_KEY
        }
      })
    );
  }
}
