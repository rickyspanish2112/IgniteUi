import { Component, OnInit, Input } from '@angular/core';
import { DisplayDensityToken, IgxFilterOptions } from 'igniteui-angular';
import { DataItem } from '../../../model/DataItem';

@Component({
  providers: [
    { provide: DisplayDensityToken, useValue: { displayDensity: 'compact' } }
  ],
  selector: 'app-declaration-type-control',
  templateUrl: './declaration-type-control.component.html',
  styleUrls: ['./declaration-type-control.component.scss']
})
export class DeclarationTypeControlComponent implements OnInit {
  public labelPlaceHolder = 'Declaration Type [01]';
  public items: DataItem[];
  public declarationTypes = [
    'IMA - Standard customs declaration (Import not EFTA) - Goods arrived',
    'IMB - Simplified declaration on an occasional basis (Import not EFTA) - Goods arrived',
    'IMD - Standard customs declaration (Import not EFTA) - Goods not arrived',
    'COB - Simplified declaration on an occasional basis (Trade new Member States) - Goods arrived',
    'COE - Simplified declaration on an occasional basis (Trade new Member States) - Goods not arrived',
    'COX - Supplementary declaration covered by types B and E (Trade new Member States) - Goods arrived',
    'IME - Simplified declaration on an occasional basis (Import not EFTA) - Goods not arrived',
    'C21 (Import not EFTA) - Goods not arrived'
  ];
  public itemHeight = 0;
  public itemsMaxHeight = 140;
  public search: string;
  @Input()
  pattern: string | RegExp;
  get fo() {
    const filterOptions = new IgxFilterOptions();
    filterOptions.key = 'name';
    filterOptions.inputValue = this.search;
    return filterOptions;
  }

  constructor() {}

  ngOnInit() {
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
}
