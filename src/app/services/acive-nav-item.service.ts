import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AciveNavItemService {
 private aciveNavItem : BehaviorSubject<HTMLElement> = new BehaviorSubject<HTMLElement>(null);
  constructor() { }
  setActiveNavItem(elem : HTMLElement):void {
    this.aciveNavItem.next(elem)
  };
  getActiveNavItem(): HTMLElement{
    return this.aciveNavItem.getValue();
  }
}
