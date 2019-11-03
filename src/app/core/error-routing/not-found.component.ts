import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found1',
  template: `
    '<p><h2>Error 404: Page not found</h2>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
