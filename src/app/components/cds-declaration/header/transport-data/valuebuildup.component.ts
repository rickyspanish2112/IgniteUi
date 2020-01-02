import { Component, OnInit, ViewChild } from '@angular/core';
import { DisplayDensityToken, IgxDropDownComponent, IgxInputGroupComponent, ConnectedPositioningStrategy } from 'igniteui-angular';

@Component({
  providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: 'compact' } }],
  selector: 'app-valuebuildup',
  templateUrl: './valuebuildup.component.html',
  styleUrls: ['./valuebuildup.component.scss']
})
export class ValuebuildupComponent implements OnInit {
apportionedBy = 'Apportioned By [64]';
airportOfLoading = 'Airport of Loading [61]';

@ViewChild(IgxDropDownComponent, { static: true }) public igxDropDown: IgxDropDownComponent;
@ViewChild('inputGroup', { read: IgxInputGroupComponent, static: true }) public inputGroup: IgxInputGroupComponent;

public items: Array<{ field: string }> = [
  { field: '' },
  { field: 'Value' },
  { field: 'Gross Mass' }
];


  constructor() { }

  ngOnInit() {
  }

  public openDropDown() {
    if (this.igxDropDown.collapsed) {
        this.igxDropDown.open({
            modal: false,
            positionStrategy: new ConnectedPositioningStrategy({
                target: this.inputGroup.element.nativeElement
            })
        });
    }
}


}
