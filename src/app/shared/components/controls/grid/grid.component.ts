import { Component, OnInit, ViewChild } from '@angular/core';
import {
  IgxGridTransaction,
  IgxTransactionService,
  IgxGridComponent,
  IGridKeydownEventArgs,
  IgxGridCellComponent
} from 'igniteui-angular';
import { AdditionsDeductions } from 'src/app/model/AdditionsDeductionData';
import { DATA } from './data/dummyData';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @ViewChild('grid', { read: IgxGridComponent, static: true })
  public grid: IgxGridComponent;

  public additionsDeduction: AdditionsDeductions;
  public data: AdditionsDeductions[];
  public Id;
  public Code;
  public Currency;
  public Amount;

  constructor() {
    }

  ngOnInit(): void {

    this.data = DATA;
    this.Id = this.data.length;
    this.additionsDeduction = new AdditionsDeductions();

  }

  public removeRow(rowIndex) {
    const row = this.grid.getRowByIndex(rowIndex);
    row.delete();
  }

  public customKeydown(args: IGridKeydownEventArgs) {
    const target: IgxGridCellComponent = args.target as IgxGridCellComponent;
    const evt: KeyboardEvent = args.event as KeyboardEvent;
    const type = args.targetType;

    if (type === 'dataCell' && evt.key.toLowerCase() === 'arrowdown') {

      const currentId = this.Id;
      const selectedRow = target.rowIndex;

      const alignedSelectedRow = selectedRow + 1; // Very hackey but it will do for POC

      if (currentId !== alignedSelectedRow) {
        return;
      }

      this.grid.addRow({
        Id: this.Id++,
        Code: '',
        Currency: '',
        Amount: ''
      });
    }
  }
}
