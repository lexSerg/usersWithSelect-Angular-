import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComment } from '../../interfaces/comment.interface';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
  comments: IComment[] = [];
  constructor(private activatedRoute : ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.comments = value.comments)
   }
  ngOnInit(): void {
  }

}
