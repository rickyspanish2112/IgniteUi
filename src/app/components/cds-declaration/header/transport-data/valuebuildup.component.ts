import { Component, OnInit } from '@angular/core';
import { DisplayDensityToken } from 'igniteui-angular';

@Component({
  providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: 'compact' } }],
  selector: 'app-valuebuildup',
  templateUrl: './valuebuildup.component.html',
  styleUrls: ['./valuebuildup.component.scss']
})
export class ValuebuildupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
