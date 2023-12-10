import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getGroupAction } from 'src/app/store/actions/group.action';
import { GroupItem } from 'src/app/store/models/group.models';
import { selectGroup } from 'src/app/store/selectors/group.selectors';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {
  public groupList$: Observable<GroupItem[]> | undefined;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.groupList$ = this.store.select(selectGroup);
    this.store.dispatch(getGroupAction());
  }
}
