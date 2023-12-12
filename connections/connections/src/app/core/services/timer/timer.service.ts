import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, takeWhile, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private timer: { [nameTimer: string]: BehaviorSubject<number | null> } = {};

  createTimer(nameTimer: string, amount: number): void {
    this.timer[nameTimer] ??= new BehaviorSubject<number | null>(amount);
    this.timer[nameTimer]?.next(amount);
  }

  startTimer(nameTimer: string): void {
    timer(0, 1000)
      .pipe(
        takeWhile(() => {
          let value = this.timer[nameTimer]?.value;
          return value != null && value > 0;
        })
      )
      .subscribe(() => {
        let value = this.timer[nameTimer]?.value;
        if (value != null && value > 0) {
          this.timer[nameTimer]?.next(value - 1);
        }
      });
  }

  getTimer(nameTimer: string): Observable<number | null > | undefined {
    this.timer[nameTimer] ??= new BehaviorSubject<number | null>(null);
    return this.timer[nameTimer]?.asObservable();
  }
}
