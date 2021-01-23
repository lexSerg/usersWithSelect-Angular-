import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services';
import { UserPrevewComponent } from './components/user-prevew/user-prevew.component';
import { FullUserComponent } from './components/full-user/full-user.component';


@NgModule({
  declarations: [AllUsersComponent, UserPrevewComponent, FullUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
})
export class UserModule { }
