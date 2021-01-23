import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IComment } from '../modules/comment/interfaces/comment.interface';
import { IPost } from '../modules/post/interfaces';
import { IUser } from '../modules/user/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
private userDataList : BehaviorSubject<Partial<IUser[]>> = new BehaviorSubject<Partial<IUser[]>>([]);
private postDataList : BehaviorSubject<Partial<IPost[]>> = new BehaviorSubject<Partial<IPost[]>>([]);
private commentDataList : BehaviorSubject<Partial<IComment[]>> = new BehaviorSubject<Partial<IComment[]>>([]);
  constructor() { }
  // =========Users================
  setUserDataList(users : IUser[]):void {
    this.userDataList.next(users)
  };
  getUserDataList():Partial<IUser[]>{
    return this.userDataList.getValue();
  }
// ==========Posts=================
  setPostDataList(posts : IPost[]):void {
    this.postDataList.next(posts)
  };
  getPostDataList():Partial<IPost[]>{
    return this.postDataList.getValue()
  }
// ==========Comments=================
  setCommentDataList(comments : IComment[]):void {
    this.commentDataList.next(comments)
  };
  getCommentDataList():Partial<IComment[]> {
    return this.commentDataList.getValue()
  }
}




