import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit {
  public groupMessageForm!: FormGroup<{ groupMessage: FormControl }>;

  public timerGroupSubscription: Observable<number | null> | undefined;

  constructor(
    private store: Store,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.groupMessageForm = this.fb.group({
      groupMessage: ['', [Validators.required]]
    });
  }

  get groupMessage() {
    return this.groupMessageForm.get('groupMessage') as FormControl;
  }

  public updateMessage() {}

  public createMessage() {}
}
