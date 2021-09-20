import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:`<app-header-bar></app-header-bar><router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'Amobter Loja E-commerce';
}
