import { Component, OnInit } from '@angular/core';
import { DisplayDensityToken } from 'igniteui-angular';

@Component({
  providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: 'compact' } }],
  selector: 'app-transportdata',
  templateUrl: './transportdata.component.html',
  styleUrls: ['./transportdata.component.scss']
})
export class TransportdataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
