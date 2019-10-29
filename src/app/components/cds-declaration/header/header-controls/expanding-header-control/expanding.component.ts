import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxExpansionPanelComponent } from 'igniteui-angular';

@Component({
  selector: 'app-expanding',
  templateUrl: './expanding.component.html',
  styleUrls: ['./expanding.component.scss']
})
export class ExpandingComponent implements OnInit {

  @ViewChild(IgxExpansionPanelComponent, { read: IgxExpansionPanelComponent, static: true })
  public panel: IgxExpansionPanelComponent;
  public expansionPanelDecription = 'Expand to display all related CDS Declaration header controls.';

  constructor() { }

  ngOnInit() {
  }

  public handleExpansion(evt?: { event: Event }) {
    console.log('Expanded event thrown ', (evt ? 'with event: ' + evt.event : 'with no event'));
    this.expansionPanelDecription = 'Colapse to hide all related CDS Declaration header controls.';

  }

  public handleCollapse(evt?: { event: Event }) {
    console.log('Collapsed event thrown ', (evt ? 'with event: ' + evt.event : 'with no event'));
    this.expansionPanelDecription = 'Expand to display all related CDS Declaration header controls.';
  }

}
