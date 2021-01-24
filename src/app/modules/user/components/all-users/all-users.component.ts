import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router'
import { SubjectService } from 'src/app/services/subject.service';
import { IUser } from '../../interfaces';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  usersList: IUser[] = [];
  usersShowList: IUser[] = [];
  constructor(private activatedRoute : ActivatedRoute, private subjectService : SubjectService) { 
    this.activatedRoute.data.subscribe(value => this.usersList = value.users)
    this.usersShowList = this.usersList;
    //Write data to share subjectService
    //Это дает нам глобальные переменные, к которым мы можем обращаться из разныx компонент, записываем в них данные 
    // JASON Placeholder
    this.subjectService.setUserDataList(this.usersList);
    this.activatedRoute.data.subscribe(value=> this.subjectService.setPostDataList(value.posts));
    this.activatedRoute.data.subscribe(value=> this.subjectService.setCommentDataList(value.comments));
  }
  ngOnInit(): void {
  }
  selectUser(event):void{
    let userId = event.target.index;
    if (typeof userId === 'undefined') return;
    if (userId === 0) {
      this.usersShowList = this.usersList;
      return
    };
    this.usersShowList = this.usersList.filter(value => value.id === userId);
  }

}
