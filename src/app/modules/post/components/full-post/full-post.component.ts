import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComment } from 'src/app/modules/comment/interfaces/comment.interface';
import { IPost } from '../../interfaces';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {
  @Input()
  post: IPost;
  commentToggle: boolean = false;
  postComments : IComment[] = [];
  allPostComments : IComment[] = [];
  btnTitle : string = 'Show post comments';
  constructor(private activatedRoute : ActivatedRoute) { }
  showComments():void{
   this.activatedRoute.data.subscribe(value => this.allPostComments = value.comments);
   this.postComments = this.allPostComments.filter(value=> value.postId === this.post.id);
   this.commentToggle = !this.commentToggle; 
   !this.commentToggle? this.btnTitle = 'Show post comments' : this.btnTitle = 'Hide post comments';
  }

  ngOnInit(): void {
  }

}
