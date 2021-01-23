import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router'
import { IUser } from '../../interfaces';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  usersList: IUser[] = [];
  usersShowList: IUser[] = [];
  constructor(private activatedRoute : ActivatedRoute) { 
    this.activatedRoute.data.subscribe(value => this.usersList = value.users)
    this.usersShowList = this.usersList;
  }
  ngOnInit(): void {
  }
  selectUser(event):void{
    let usedId = event.target.index;
    if (typeof usedId === 'undefined') return;
    if (usedId === 0) {
      this.usersShowList = this.usersList;
      return
    };
    this.usersShowList = this.usersList.filter(value => value.id === usedId);
  }

}
