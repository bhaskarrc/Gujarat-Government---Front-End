import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public message = new BehaviorSubject<any>('');
  constructor() { }
  viewComments(value: any) {
    this.message.next(value);
  }
}
