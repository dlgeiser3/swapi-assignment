import { Component } from '@angular/core';
 
@Component({
  selector: 'app-search',
  template: `<input>
    <button (click)="onClickMe()">Search!</button>
    {{clickMessage}}`
})
export class SearchComponent {
  clickMessage = '';
 
  onClickMe() {
    this.clickMessage = 'i would have searched had i worked';
  }
}