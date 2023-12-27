import { Pipe, PipeTransform } from '@angular/core';
import { CompanionsItem } from 'src/app/store/models/people-conversation.models';

@Pipe({
  name: 'companionsColorPipe'
})
export class CompanionsColorPipe implements PipeTransform {
  private isSameCompanions: CompanionsItem | undefined;
  transform(currentId: string, companionsList: CompanionsItem[]): boolean {
    this.isSameCompanions = companionsList.find(
      (item) => item.companionID.S === currentId
    );
    return !!this.isSameCompanions;
  }
}
