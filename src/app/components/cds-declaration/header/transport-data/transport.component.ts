import { Component, OnInit } from '@angular/core';
import { DisplayDensityToken } from 'igniteui-angular';

@Component({
  providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: 'compact' } }],
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})
export class TransportComponent implements OnInit {
  totalPackages = 'Total Packages [06]';
  representation = 'Repr. Status [14]';

  constructor() { }

  ngOnInit() {
  }

}
