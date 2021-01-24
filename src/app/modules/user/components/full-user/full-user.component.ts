import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../interfaces';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {
  user : IUser;
  constructor(private router: Router) { 
    this.user = this.router.getCurrentNavigation().extras.state.user;
  }

  ngOnInit(): void {
  }

}
