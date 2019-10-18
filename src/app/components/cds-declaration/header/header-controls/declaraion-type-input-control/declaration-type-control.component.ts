import { Component, OnInit } from '@angular/core';
import { ConnectedPositioningStrategy, VerticalAlignment } from 'igniteui-angular';

interface DataItem {
  name: string;
  header: boolean;
  disabled: boolean;
}

@Component({
  selector: 'app-declaration-type-control',
  templateUrl: './declaration-type-control.component.html',
  styleUrls: ['./declaration-type-control.component.scss']
})
export class DeclarationTypeControlComponent implements OnInit {
  public items: DataItem[];
  public declarationTypes = [
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
  public itemHeight = 48;
  public itemsMaxHeight = 240;
  settings: { positionStrategy: ConnectedPositioningStrategy; };

  constructor() {
    const itemsCollection: DataItem[] = [];

    this.declarationTypes.forEach(element => {
      const item: DataItem = {
        name: element,
        header: false,
        disabled: false
      };
      itemsCollection.push(item);
    });
    this.items = itemsCollection;
  }

  ngOnInit() {

  }
}
