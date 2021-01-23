import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<IPost[]> {

  constructor(private postServise : PostService) { }
  resolve(): Observable<IPost[]> | Promise<IPost[]> | IPost[] {
    return this.postServise.getPosts()
  }
}
