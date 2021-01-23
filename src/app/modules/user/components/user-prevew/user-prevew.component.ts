import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../interfaces';

@Component({
  selector: 'app-user-prevew',
  templateUrl: './user-prevew.component.html',
  styleUrls: ['./user-prevew.component.css']
})
export class UserPrevewComponent implements OnInit {
  @Input()
  user : IUser;
  constructor() { }

  ngOnInit(): void {
  }

}
