import { Pipe, PipeTransform } from '@angular/core';
import { PeopleItem } from 'src/app/store/models/people.models';

@Pipe({
  name: 'nameUserTransformPipe'
})
export class NameUserTransformPipe implements PipeTransform {
  private currentPeople: PeopleItem | undefined;
  transform(currentId: string, peoplesList: PeopleItem[]): string {
    this.currentPeople = peoplesList.find((item) => item.uid.S === currentId);
    return this.currentPeople ? this.currentPeople.name.S : 'unknown name';
  }
}
