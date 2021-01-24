import { Component, Input, OnInit } from '@angular/core';
import { IComment } from '../../interfaces/comment.interface';

@Component({
  selector: 'app-full-comment',
  templateUrl: './full-comment.component.html',
  styleUrls: ['./full-comment.component.css']
})
export class FullCommentComponent implements OnInit {
  @Input()
  comment: IComment;
  constructor() { }

  ngOnInit(): void {
    console.log(this.comment);
  }

}
