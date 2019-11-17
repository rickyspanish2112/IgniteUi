import { Component, OnInit } from '@angular/core';
import { DisplayDensityToken } from 'igniteui-angular';

@Component({
  providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: 'compact' } }],
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})
export class TransportComponent implements OnInit {
  totalPackages = 'Total Packages [06]';
  representation = 'Repr. Status [14]';
  dispatchCountry = 'Dispatch Country [15a]';
  destinationCountry = 'Destination Cntry. [17a]';
  deliveryTerms = 'Delivery Terms [20]';
  deliveryTermsUnLoCode = 'UN/LOCODE';
  deliveryTermsLocation = 'City & Location';
  totalInvoiceCurrency = 'Invoice Total [22]';
  totalInvoiceAmount = 'Invoice Amount';
  exchangeRate = 'Exchange Rate [23]';
  goodsLocation = 'Goods Location [30]';
  firstDeferment = 'First Deferment [48]';
  secondDeferment = 'Second Deferment [48]';
  warehouseHouse = 'Warehouse [49]';
  site = 'Site';
  supervisingOfice = 'Supervising Offioce [49]';
  grossMass = 'Gross Mass [35]';
  presentationOffice = 'Presentation Office [44]';


  constructor() { }

  ngOnInit() {
  }

}
