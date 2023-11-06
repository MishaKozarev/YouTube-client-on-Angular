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
  public date = '';
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
    const currentVideo = this.items.find((item) => item.id === id) as Item;
    this.imgSrc = currentVideo.snippet.thumbnails.high.url;
    this.videoTitle = currentVideo.snippet.title;
    this.getDate(currentVideo.snippet.publishedAt);
    this.description = currentVideo.snippet.localized.description;
    this.statistic = Object.assign(this.statistic, currentVideo.statistics);
    this.publishDate = currentVideo.snippet.publishedAt;
  }

  private getDate(date: string) {
    const dateOfPublish = new Date(date);
    const dayOfTheWeek = this.daysOtTheWeek[dateOfPublish.getDay()];
    const month = this.months[dateOfPublish.getMonth()];
    const day = dateOfPublish.getDate();
    const year = dateOfPublish.getFullYear();
    this.date = `${dayOfTheWeek}, ${month} ${day}, ${year}`;
  }

  private daysOtTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  private months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
}
