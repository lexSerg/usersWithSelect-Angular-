import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentRoutingModule } from './comment-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';



@NgModule({
  declarations: [AllCommentsComponent],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ]
})
export class CommentModule { }
