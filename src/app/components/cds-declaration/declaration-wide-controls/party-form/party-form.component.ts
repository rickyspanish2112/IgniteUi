import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { IgxExpansionPanelComponent, IExpansionPanelEventArgs, DisplayDensityToken } from 'igniteui-angular';

@Component({
  selector: 'app-party-form',
  providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: 'compact' } }],
  templateUrl: './party-form.component.html',
  styleUrls: ['./party-form.component.scss']
})
export class PartyFormComponent {


}
