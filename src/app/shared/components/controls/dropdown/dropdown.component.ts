import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DisplayDensityToken, IgxDropDownComponent, IgxInputGroupComponent, ConnectedPositioningStrategy } from 'igniteui-angular';

@Component({
  providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: 'compact' } }],
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {


  @ViewChild(IgxDropDownComponent, { static: true }) public igxDropDown: IgxDropDownComponent;
  @ViewChild('inputGroup', { read: IgxInputGroupComponent, static: true }) public inputGroup: IgxInputGroupComponent;

  @Input()
  placeHolder: string;

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
