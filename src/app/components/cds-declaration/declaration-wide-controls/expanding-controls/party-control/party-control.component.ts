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
  public currentImporterShortCode = 'Apple (UK) Ltd';
  public currentExporterShortCode = 'Microsoft';
 public currentDeclarantShortCode = 'ASM UK Ltd';

  @Input()
  partyType: string;
  @Input()
  partyTypeDescription: string;
  @Input()
  shortCodeLabel: string;

  ngOnInit() {
  }

}
