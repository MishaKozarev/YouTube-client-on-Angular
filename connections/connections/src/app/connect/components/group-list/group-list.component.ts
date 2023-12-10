import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
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
  public groupNameForm!: FormGroup<{ nameGroup: FormControl }>;
  public isShowForm = false;
  public errorMessage = 'Please enter a details';

  constructor(
    private store: Store,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.groupList$ = this.store.select(selectGroup);
    this.store.dispatch(getGroupAction());
    this.groupNameForm = this.fb.group({
      nameGroup: ['',
      [
        Validators.required,
        Validators.maxLength(30),
        Validators.pattern(/^[a-zA-Z0-9 ]*$/),]]
    });
  }

  get nameGroup() {
    return this.groupNameForm.get('nameGroup') as FormControl;
  }

  public showForm(): void {
    this.isShowForm = true;
  }

  public hideForm(): void {
    this.isShowForm = false;
    this.groupNameForm.reset();
  }
}
