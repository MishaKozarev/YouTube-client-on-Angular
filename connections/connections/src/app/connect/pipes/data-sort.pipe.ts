import { Pipe, PipeTransform } from '@angular/core';
import { GroupMessageItem } from 'src/app/store/models/group-message.models';

@Pipe({
  name: 'dateSort'
})
export class DateSortPipe implements PipeTransform {
  private messageItems: GroupMessageItem[] | undefined;
  transform(messages: GroupMessageItem[]): GroupMessageItem[] {
    this.messageItems = [...messages];
    return this.messageItems.sort(
      (messageA, messageB) =>
        Number(messageA.createdAt.S) - Number(messageB.createdAt.S)
    );
  }
}
