import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { FullPostComponent } from './components/full-post/full-post.component';


@NgModule({
  declarations: [AllPostsComponent, FullPostComponent],
  imports: [
    CommonModule,
    PostRoutingModule, 
    HttpClientModule
  ],
  exports: [
    FullPostComponent
  ]
})
export class PostModule { }
