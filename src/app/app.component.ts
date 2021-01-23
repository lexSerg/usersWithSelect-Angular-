import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'usersWithSelect';
  activeItem : HTMLElement;
  setActiveNav(event): void {
    if (!(typeof this.activeItem === 'undefined')) this.activeItem.classList.remove('active-item')
    this.activeItem = event.target.parentElement;
    switch(event.target.parentElement.textContent) {
      case 'Home' : this.activeItem.classList.add('active-item');
        break;
      case 'Users' : this.activeItem.classList.add('active-item');
        break;
      case 'Posts' : this.activeItem.classList.add('active-item');
        break;
      case 'Comments' : this.activeItem.classList.add('active-item');
        break;
      default: 
      console.log('Нет подходящей ссылки');
    };
  }

}
