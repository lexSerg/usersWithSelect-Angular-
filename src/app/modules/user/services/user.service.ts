import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http : HttpClient) { }
  getUsers() : Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.URL}`)
  }
  getSingleUser(id) : Observable<IUser> {
   return this.http.get<IUser>(`${this.URL}/${id}`)
    
    
  }
}
