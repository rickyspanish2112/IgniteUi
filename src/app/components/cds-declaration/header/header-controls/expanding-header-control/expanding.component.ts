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

  public ExpandedDescription = 'Expand to display fields relating to a CDS Declaration header.';

  constructor() { }

  ngOnInit() {
  }

  public handleExpansion(evt?: { event: Event }) {
    this.ExpandedDescription = 'Collaspe to hide fields relating to a CDS Declaration header.';
  }

  public handleCollapse(evt?: { event: Event }) {
    this.ExpandedDescription = 'Expand to display fields relating to a CDS Declaration header.';
  }

}
