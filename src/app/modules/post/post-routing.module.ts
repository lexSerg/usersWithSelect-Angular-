import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { PostResolveService } from './services';

const routes: Routes = [
  { path: '', component: AllPostsComponent, resolve: {posts : PostResolveService}}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
