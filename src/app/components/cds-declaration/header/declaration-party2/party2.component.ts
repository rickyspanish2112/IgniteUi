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

  ngOnInit() {
  }

}
