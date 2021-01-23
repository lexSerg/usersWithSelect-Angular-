import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../interfaces';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {
  @Input()
  post: IPost;
  constructor() { }

  ngOnInit(): void {
  }

}
