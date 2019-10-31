import { Component, OnInit } from '@angular/core';
import { Card } from './model/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public card = new Card({
    buttons: ['read more'],
    content: `The content of this SPA is to demonstarte if all controls and features of the current Sequoia Applcation can you used in a web
    app. `,
    icons: ['favorite', 'share'],
    imageUrl: 'https://www.infragistics.com/angular-demos/assets/images/card/media/ny.jpg',
    subtitle: 'Using Ignite UI for Angular controls',
    title: 'Helios UI Prototype'
});

  ngOnInit() {
  }

}
