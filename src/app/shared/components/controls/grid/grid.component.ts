import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridTransaction, IgxTransactionService, IgxDialogComponent, IgxGridComponent, Transaction } from 'igniteui-angular';
import { DATA } from './data/dummyData';

@Component({
  providers: [{ provide: IgxGridTransaction, useClass: IgxTransactionService }],
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @ViewChild('gridRowEditTransaction', { read: IgxGridComponent, static: true }) public grid: IgxGridComponent;
  @ViewChild(IgxDialogComponent, { static: true }) public dialog: IgxDialogComponent;
  @ViewChild('dialogGrid', { read: IgxGridComponent, static: true }) public dialogGrid: IgxGridComponent;

  public currentActiveGrid: { id: string, transactions: any[] } = { id: '', transactions: [] };

  public data: any[];
  public transactionsData: Transaction[] = [];
  private Id: number;
  private code: '';
  private currency: '';
  private amount: number;

  constructor() {
    this.data = DATA;
    this.Id = this.data.length + 1;
  }

  ngOnInit(): void {
    this.transactionsData = this.grid.transactions.getAggregatedChanges(true);
    this.grid.transactions.onStateUpdate.subscribe(() => {
      this.transactionsData = this.grid.transactions.getAggregatedChanges(true);
    });
  }

  public addRow() {
    this.grid.addRow({
      Id: this.Id++,
      Code: this.code,
      Currency: this.currency,
      Amount: this.amount
    });
  }

  public deleteRow(rowID) {
    this.grid.deleteRow(rowID);
  }

  public undo() {
    this.grid.transactions.undo();
  }

  public redo() {
    this.grid.transactions.redo();
  }

  public openCommitDialog() {
    this.dialog.open();
    this.dialogGrid.reflow();
  }

  public commit() {
    this.grid.transactions.commit(this.data);
    this.dialog.close();
  }

  public cancel() {
    this.dialog.close();
  }

  public discard() {
    this.grid.transactions.clear();
    this.dialog.close();
}

  public stateFormatter(value: string) {
    return JSON.stringify(value);
  }

  public typeFormatter(value: string) {
    return value.toUpperCase();
  }

  public classFromType(type: string): string {
    return `transaction--${type.toLowerCase()}`;
  }

  public get undoEnabled(): boolean {
    return this.grid.transactions.canUndo;
  }

  public get redoEnabled(): boolean {
    return this.grid.transactions.canRedo;
  }

  public get hasTransactions(): boolean {
    return this.grid.transactions.getAggregatedChanges(false).length > 0;
  }
}
