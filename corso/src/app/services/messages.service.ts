import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private _messages = new Subject<string>();

  constructor() { }

  nuovoMessaggio(msg: string) {
    this._messages.next(msg);
  }

  get messages(): Observable<string> {
    return this._messages.asObservable();
  }
}
