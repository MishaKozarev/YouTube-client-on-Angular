import { Pipe, PipeTransform } from '@angular/core';

import { Item } from '../../model/search-item.model';

@Pipe({
  name: 'sortView'
})
export class SortViewPipe implements PipeTransform {
  public transform(
    items: Item[],
    isSortView: boolean,
    ascendView: boolean
  ): Item[] {
    if (!isSortView) return items;
    if (ascendView) {
      return items.sort(
        (a, b) => +a.statistics.viewCount - +b.statistics.viewCount
      );
    }
    return items.sort(
      (a, b) => +b.statistics.viewCount - +a.statistics.viewCount
    );
  }
}
