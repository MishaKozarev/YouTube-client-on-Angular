/* eslint class-methods-use-this: 0 */
import { Pipe, PipeTransform } from '@angular/core';

import { Item } from '../../models/search-item.model';

@Pipe({
  name: 'sortDate'
})
export class SortDatePipe implements PipeTransform {
  public transform(
    items: Item[],
    isSortData: boolean,
    ascendDate: boolean
  ): Item[] {
    if (!isSortData) return items;
    if (ascendDate) {
      return items.sort(
        (a, b) =>
          new Date(a.snippet.publishedAt).getTime() -
          new Date(b.snippet.publishedAt).getTime()
      );
    }
    return items.sort(
      (a, b) =>
        new Date(b.snippet.publishedAt).getTime() -
        new Date(a.snippet.publishedAt).getTime()
    );
  }
}
