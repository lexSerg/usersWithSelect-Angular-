import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentResolveService } from '../comment/services';
import { PostResolveService } from '../post/services';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { FullUserComponent } from './components/full-user/full-user.component';
import { UserResolveService } from './services';

const routes: Routes = [
  {path: '', component: AllUsersComponent, resolve:
   {
     users : UserResolveService, 
     posts : PostResolveService, 
     comments: CommentResolveService,
   },
  },
 {path: 'details/:id', component: FullUserComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
