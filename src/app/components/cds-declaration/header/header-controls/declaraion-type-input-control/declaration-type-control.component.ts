import { Component, OnInit } from '@angular/core';
import { IgxInputGroupComponent, ConnectedPositioningStrategy, VerticalAlignment } from 'igniteui-angular';

@Component({
  selector: 'app-declaration-type-control',
  templateUrl: './declaration-type-control.component.html',
  styleUrls: ['./declaration-type-control.component.scss']
})
export class DeclarationTypeControlComponent implements OnInit {
  declarationTypes: string[];
  public selectedDeclarationType;
  settings: { positionStrategy: ConnectedPositioningStrategy; };

  constructor() {}

  ngOnInit() {
    this.declarationTypes = [
      'IMA - Standard customs declaration (Import not EFTA) - Goods arrived',
      'IMB - Simplified declaration on an occasional basis (Import not EFTA) - Goods arrived',
      'IMD - Standard customs declaration (Import not EFTA) - Goods not arrived',
      'COB - Simplified declaration on an occasional basis (Trade new Member States) - Goods arrived',
      'COE - Simplified declaration on an occasional basis (Trade new Member States) - Goods not arrived',
      'COX - Supplementary declaration covered by types B and E (Trade new Member States) - Goods arrived',
      'IMB - Simplified declaration on an occasional basis (Import not EFTA) - Goods arrived',
      'IME - Simplified declaration on an occasional basis (Import not EFTA) - Goods not arrived',
      'IMF - Simplified declaration with regular use (pre-authorised) (Import not EFTA) - Goods not arrived',
      'C21 (Import not EFTA) - Goods not arrived'
    ];

    // @ViewChild('inputGroup', { read: IgxInputGroupComponent }) inputGroup: IgxInputGroupComponent;

    this.settings = {
      positionStrategy: new ConnectedPositioningStrategy({
          closeAnimation: null,
          openAnimation: null,
          verticalDirection: VerticalAlignment.Bottom,
          verticalStartPoint: VerticalAlignment.Bottom,

        })
  };

  }
}
