import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';

const routes: Routes = [
  {path: '', component: AllCommentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
