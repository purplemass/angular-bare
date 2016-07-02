import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h2>{{title}}</h2>'
})
export class AppComponent {
  private title: string;

  constructor() {
    this.title = 'Angular 2 Bare';
  }
}
