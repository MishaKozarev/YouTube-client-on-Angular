import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowFilterBlockService {
  public showFilterBlock: boolean = false;
  getIsShow() {
    this.showFilterBlock = !this.showFilterBlock;
  }
}
