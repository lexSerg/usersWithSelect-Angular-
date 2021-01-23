import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { CommentResolveService } from './services/comment-resolve.service';

const routes: Routes = [
  {path: '', component: AllCommentsComponent, resolve: {comments : CommentResolveService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
