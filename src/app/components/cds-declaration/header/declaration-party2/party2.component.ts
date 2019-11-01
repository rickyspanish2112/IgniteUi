import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-party2',
  templateUrl: './party2.component.html',
  styleUrls: ['./party2.component.scss']
})
export class Party2Component implements OnInit {

  constructor() { }
  sellerPartyType = 'Seller [02]';
  buyerPartyType = 'Buyer [08]';
  representitivePartyType = 'Representitive [14]';

  sellerDescription = 'seller';
  buyerDescription = 'buyer';
  represetnitiveDescription = 'representitive';

  importerPartyType = 'Importer [02]';
  exporterPartyType = 'Exporter [08]';
  declarantPartyType = 'Declarant [14]';

  importerDescription = 'importer';
  exporterDescription = 'exporter';
  declarantDescription = 'declarant';

  importerPartyLable = 'Schenker UK Ltd';
  exporterPartyLable = 'NNR UK Ltd';
  declarantPartyLable = 'ASM UK Ltd';

  ngOnInit() {
  }

}
