import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../model/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUserById(id): Observable<UserModel> {
    return this.http.get<UserModel>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
