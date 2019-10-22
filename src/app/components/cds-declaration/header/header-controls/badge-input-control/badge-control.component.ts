import { Component, OnInit, Input } from '@angular/core';
import { DataItem } from '../../../model/DataItem';
import { IgxFilterOptions, DisplayDensityToken } from 'igniteui-angular';

@Component({
  providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: 'compact' } }],
  selector: 'app-badge-control',
  templateUrl: './badge-control.component.html',
  styleUrls: ['./badge-control.component.scss']
})
export class BadgeControlComponent implements OnInit {
  public items: DataItem[];
  public badges = [
    'DOZ - Schenker UK',
    'DRB - Flair Forwarding',
    'ANZ - Bob Freight'
  ];

  public itemHeight = 0;
  public itemsMaxHeight = 90;
  public search: string;
  get fo() {
    const filterOptions = new IgxFilterOptions();
    filterOptions.key = 'name';
    filterOptions.inputValue = this.search;
    return filterOptions;
}

@Input()
pattern: string | RegExp;

  constructor() { }

  ngOnInit() {
    const itemsCollection: DataItem[] = [];

    this.badges.forEach(element => {
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
