import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() public isShow?: boolean;
  @Output() onSortDate: EventEmitter<void> = new EventEmitter();
  @Output() onSortView: EventEmitter<void> = new EventEmitter();
  @Output() onSortWord: EventEmitter<string> = new EventEmitter();
  sortByDate(): void {
    this.onSortDate.emit();
  }
  sortByView(): void {
    this.onSortView.emit();
  }
  getFilterInputValue(value: string): void {
    this.onSortWord.emit(value);
  }
}
