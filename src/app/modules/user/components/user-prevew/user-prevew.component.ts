import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/modules/post/interfaces';
import { PostService } from 'src/app/modules/post/services';
import { IUser } from '../../interfaces';

@Component({
  selector: 'app-user-prevew',
  templateUrl: './user-prevew.component.html',
  styleUrls: ['./user-prevew.component.css']
})
export class UserPrevewComponent implements OnInit {
  @Input()
  user : IUser;
  posts : IPost[] = []
  constructor() {
    
  }

  ngOnInit(): void {
  }
  showPosts(){
  }
}
