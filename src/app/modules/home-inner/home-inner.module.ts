import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeInnerComponent } from './home-inner/home-inner.component';



@NgModule({
  declarations: [HomeInnerComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeInnerComponent]
})
export class HomeInnerModule { }
