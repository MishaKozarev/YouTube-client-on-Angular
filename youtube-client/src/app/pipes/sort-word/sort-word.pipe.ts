import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../../model/search-item.model';

@Pipe({
  name: 'sortWord'
})
export class SortWordPipe implements PipeTransform {
  public transform = (items: Item[], value: string) => {
    if (!value) return items;
    return items.filter((item) => {
      const channelTitle = item.snippet.channelTitle.toLowerCase();
      return channelTitle.includes(value.toLowerCase());
    });
  };
}

