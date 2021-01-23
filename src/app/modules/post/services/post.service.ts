import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/post.interface'


@Injectable({
  providedIn: 'root'
})
export class PostService {
  URL = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http : HttpClient){}
  getPosts() : Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.URL}`)
  }
  getPostById(id): Observable<Comment> {
    return this.http.get<Comment>(`${this.URL}.${id}`);
  }
}

