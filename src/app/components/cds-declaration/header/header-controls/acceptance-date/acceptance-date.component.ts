import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxDatePickerComponent, DisplayDensityToken } from 'igniteui-angular';

@Component({
  selector: 'app-acceptance-date',
  providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: 'compact' } }],
  templateUrl: './acceptance-date.component.html',
  styleUrls: ['./acceptance-date.component.scss']
})
export class AcceptanceDateComponent {
  public currentDate;

  @ViewChild(IgxDatePickerComponent, { static: true })
  private datePicker;

  public changeDate(event) {
    if (event.target.value === null) {
      return;
    }

    const input = event.target.value;

    if (input !== '') {
      const parsedDate = new Date(input);
      if (this.isDateValid(parsedDate)) {
        this.currentDate = parsedDate;
      }
    } else {
      this.datePicker.deselectDate();
      this.currentDate = input;
    }
  }

  private isDateValid(date: Date): boolean {
    return (new Date(date).toLocaleString() !== 'Invalid Date');
  }

}
