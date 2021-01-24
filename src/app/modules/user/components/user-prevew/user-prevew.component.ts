import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/modules/post/interfaces';
import { SubjectService } from 'src/app/services/subject.service';
import { IUser } from '../../interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { AciveNavItemService } from '../../../../services/index'

@Component({
  selector: 'app-user-prevew',
  templateUrl: './user-prevew.component.html',
  styleUrls: ['./user-prevew.component.css']
})
export class UserPrevewComponent implements OnInit {
  @Input()
  user : IUser;
  userPosts : IPost[] = [];
  postToggle: boolean = false;
  btnPostsTitle: string = 'Show user posts';
  btnCommentsTitle: string = 'Show user comments';
  constructor(private subjectServise : SubjectService,
              private activatedRoute: ActivatedRoute,
              private router: Router, 
              private activeNavServise : AciveNavItemService) { }
  ngOnInit(): void {
  };
  showPosts():void {
    this.userPosts = this.subjectServise.getPostDataList().filter(iter => iter.userId === this.user.id);  
    this.postToggle = !this.postToggle; 
    !this.postToggle? this.btnPostsTitle = 'Show user posts' : this.btnPostsTitle = 'Hide user posts';
  };

  goToUserDetails(id):void{
    if (!(this.activeNavServise.getActiveNavItem() === null)) 
    this.activeNavServise.getActiveNavItem().classList.remove('active-item');
    this.router.navigate(['details', id], {
    relativeTo: this.activatedRoute,
    state: {user : this.user}
    });
  }
}