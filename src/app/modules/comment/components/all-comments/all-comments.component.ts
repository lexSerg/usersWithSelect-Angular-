import { Component, HostListener, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IComment } from '../../interfaces/comment.interface';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
  comments: IComment[] = [];
  commentById: IComment[] = [];
  commentsByPostId: IComment[] = [];
  actionToggle : boolean = false;
  dropdownElem : HTMLElement;
  arrowElem : HTMLElement;
  commentsShowList: {comments : IComment[], isShow : boolean}[] = [
    {comments : [], isShow : true },
    {comments : [], isShow : false },
    {comments : [], isShow : false }
  ]

  actionList : {title : string, isShow : boolean}[] = [
    {
      title : 'Show all comments',
      isShow : true
    },
    {
      title : 'Search comment by ID',
      isShow : false
    },
    {
      title : 'Search comments by PostID',
      isShow : false
    }
  ];
  inputCommentId : number;
  inputPostId : number;
  constructor(private activatedRoute : ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => {
      this.comments = value.comments;
      this.commentsShowList[0].comments = this.comments;
    })
   }
  //  Обработчик для document
  // @HostListener('document:click', ['$event'])
  //  onClick(event: Event) {
  //    console.log((event.target));
  //    if (!this.dropdown.contains(event.target)) {
  //      // action
  //    }
  //  }

  ngOnInit(): void {
  }
  actionChoise(dropdown, arrow){
    this.dropdownElem = dropdown;
    this.arrowElem = arrow;
    this.actionToggle = !this.actionToggle;
    this.arrowToggle(this.actionToggle, arrow)
    this.actionToggle ? dropdown.classList.add('visually') : dropdown.classList.remove('visually');
  }
  arrowToggle(action:boolean, elem:HTMLElement){
    if (action) {
      elem.classList.add('dropdown-arrow-up');
      elem.classList.remove('dropdown-arrow-down')
    };
    if (!action) {
      elem.classList.add('dropdown-arrow-down');
      elem.classList.remove('dropdown-arrow-up')
    };
  };
  setIsShow(event):void{
    if (event.target.innerText === this.actionList[0].title)  this.choiseCommentsShowList(this.comments)
    this.actionList.forEach(value => 
         event.target.innerText === value.title ? value.isShow = true : value.isShow = false)
    this.actionChoise(this.dropdownElem, this.arrowElem);
  };
  ShowSingleComment(id : number):void {
    if (!this.isIdValid(id)) return;
    this.inputCommentId = id;
    this.commentsShowList[1].comments = this.comments.filter(value => value.id === this.inputCommentId);
    this.choiseCommentsShowList(this.commentsShowList[1].comments)
  };
  ShowComments(id : number):void{
    if (!this.isIdValid(id)) return;
    this.inputPostId = id;
    this.commentsShowList[2].comments = this.comments.filter(value => value.postId === this.inputPostId);
    this.choiseCommentsShowList(this.commentsShowList[2].comments);
  };

  isValidInpt(input : NgModel):boolean{
    return input.invalid 
  }

  //********** auxiliary methods *****************
  isIdValid(id):boolean{
    if (id > this.comments.length || id < 1) {
      alert(`Commets with id : ${id} not exist`)
      return false
    };
    return true
  }
  choiseCommentsShowList(choiseList: IComment[]){
    this.commentsShowList.forEach((value) => value.comments === choiseList ? 
    value.isShow = true : 
    value.isShow = false)
    console.log(this.commentsShowList);
  }
  
}; 

