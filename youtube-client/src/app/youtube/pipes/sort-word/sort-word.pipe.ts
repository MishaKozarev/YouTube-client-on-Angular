/* eslint class-methods-use-this: 0 */

import { Pipe, PipeTransform } from '@angular/core';

import { Item } from '../../models/search-item.model';

@Pipe({
  name: 'sortWord'
})
export class SortWordPipe implements PipeTransform {
  public transform = (items: Item[], value: string) => {
    if (!value) return items;
    return items.filter((item) => {
      const channelTitle = item.snippet.title.toLowerCase();
      return channelTitle.includes(value.toLowerCase());
    });
  };
}
