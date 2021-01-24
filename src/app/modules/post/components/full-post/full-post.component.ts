import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/modules/comment/interfaces/comment.interface';
import { SubjectService } from 'src/app/services';
import { IPost } from '../../interfaces';
import { FullCommentComponent } from '../../../comment/components/full-comment/full-comment.component'

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
  btnTitle : string = 'Show post comments';
  constructor(private subjectServise: SubjectService) { }
  showComments():void{
   this.postComments = this.subjectServise.getCommentDataList().filter(value=> value.postId === this.post.id);
   console.log(this.postComments );
   this.commentToggle = !this.commentToggle; 
   !this.commentToggle? this.btnTitle = 'Show post comments' : this.btnTitle = 'Hide post comments';
  }

  ngOnInit(): void {
  }

}
