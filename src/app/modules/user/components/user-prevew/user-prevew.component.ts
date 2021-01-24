import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/modules/post/interfaces';
import { SubjectService } from 'src/app/services/subject.service';
import { IUser } from '../../interfaces';
import { FullPostComponent } from '../../../post/components/full-post/full-post.component'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-prevew',
  templateUrl: './user-prevew.component.html',
  styleUrls: ['./user-prevew.component.css']
})
export class UserPrevewComponent implements OnInit {
  @Input()
  user : IUser;
  userPosts : IPost[] = [];
  allUserPosts : IPost[] = [];
  postToggle: boolean = false;
  btnTitle: string = 'Show user posts';
  constructor(private subjectServise : SubjectService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }
  ngOnInit(): void {
  };
  showPosts():void {
    this.allUserPosts = this.subjectServise.getPostDataList();  
    this.userPosts = this.allUserPosts.filter(iter => iter.userId === this.user.id);  
    this.postToggle = !this.postToggle; 
    !this.postToggle? this.btnTitle = 'Show user posts' : this.btnTitle = 'Hide user posts';
  };
  goToUserDetails(id):void{
    this.router.navigate(['details', id], {
    relativeTo: this.activatedRoute,
    state: {user : this.user}
    })
  }
}