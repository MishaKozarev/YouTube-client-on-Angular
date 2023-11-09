import { Injectable } from '@angular/core';

import { dataResponse } from '../../constants/mock-response';
import { Item, Statistics } from '../../models/search-item.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  public items: Item[] = dataResponse.items;
  public imgSrc = '';
  public videoTitle = '';
  public description = '';
  public statistic: Statistics = {
    viewCount: '0',
    likeCount: '0',
    dislikeCount: '0',
    favoriteCount: '0',
    commentCount: '0'
  };
  public publishDate = '';

  public setVideoInfo(id: string) {
    const currentVideo = this.items.find((item) => item.id.videoId === id) as Item;
    this.imgSrc = currentVideo.snippet.thumbnails.high.url;
    this.videoTitle = currentVideo.snippet.title;
    this.description = currentVideo.snippet.localized.description;
    this.statistic = Object.assign(this.statistic, currentVideo.statistics);
    this.publishDate = currentVideo.snippet.publishedAt;
  }
}
