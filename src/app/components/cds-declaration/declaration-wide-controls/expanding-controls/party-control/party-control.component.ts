import { Component, OnInit, Input } from '@angular/core';
import { DisplayDensityToken } from 'igniteui-angular';

@Component({
  providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: 'compact' } }],
  selector: 'app-party-control',
  templateUrl: './party-control.component.html',
  styleUrls: ['./party-control.component.scss']
})
export class PartyControlComponent implements OnInit {

  constructor() { }

  @Input()
  partyType: string;

  @Input()
  partyTypeDescription: string;

  ngOnInit() {
  }

}
