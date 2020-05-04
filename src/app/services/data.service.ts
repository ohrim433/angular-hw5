import {Injectable} from '@angular/core';
import {UserModel} from '../model/user-model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  loadedUsersList: UserModel[] = [];
  private state = new BehaviorSubject([]);

  constructor() {
  }

  getState() {
    return this.state;
  }

  setState(list) {
    this.loadedUsersList.push(list);
    this.state.next(this.loadedUsersList);
  }
}
