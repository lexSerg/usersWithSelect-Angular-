import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IComment } from '../interfaces/comment.interface';
import { CommentService } from './comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentResolveService implements Resolve<IComment[]> {

  constructor(private commentServise : CommentService) { }
  resolve() : Observable<IComment[]> | Promise<IComment[]> | IComment[] {
    return this.commentServise.getComments();
  }
}
