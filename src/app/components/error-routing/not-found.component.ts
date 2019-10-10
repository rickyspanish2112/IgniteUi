import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `template: '<h2>Error 404: Page not found</h2>'`
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
