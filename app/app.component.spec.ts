import { AppComponent } from './app.component'
import {
  async,
  it,
  describe,
  expect,
  inject,
  beforeEach,
  beforeEachProviders,
} from '@angular/core/testing';

describe('AppComponent', () => {

  beforeEach(() => {
    this.app = new AppComponent();
  });

  it('should have name property', () => {
    expect(this.app.title).toBe('Angular 2 Bare');
  });

  it('should say hello with title property', () => {
    expect(this.app.sayHello()).toBe('Hello Angular 2 Bare');
  });

});
