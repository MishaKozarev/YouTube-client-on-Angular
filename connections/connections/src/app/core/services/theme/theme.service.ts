import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public stateTheme = new Subject<string>();
  public stateTheme$ = this.stateTheme.asObservable();

  public changeTheme(theme: string) {
    this.stateTheme.next(theme);
  }
}
