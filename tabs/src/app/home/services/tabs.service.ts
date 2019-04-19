import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Tab } from '../models/tab';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  private tabsSubject = new Subject<Tab>();

  constructor() { }

  get tabsObservable(): Observable<Tab> {
    return this.tabsSubject.asObservable();
  }

  newTab(tab: Tab) {
    this.tabsSubject.next(tab);
  }
}
