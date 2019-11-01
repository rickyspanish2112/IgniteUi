import { Component, OnInit } from '@angular/core';
import { DisplayDensityToken } from 'igniteui-angular';

@Component({
  selector: 'app-trader-ref',
  providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: 'compact' } }],
  templateUrl: './trader-ref.component.html',
  styleUrls: ['./trader-ref.component.scss']
})
export class TraderRefComponent implements OnInit {
public labelPlaceHolder = 'Trader Reference [07]';

  constructor() { }

  ngOnInit() {
  }

}
