import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h2>{{title}}</h2>'
})
export class AppComponent {
  private title: string = 'Angular 2 Bare';

  sayHello(): string {
    return `Hello ${this.title}`;
  }
}
