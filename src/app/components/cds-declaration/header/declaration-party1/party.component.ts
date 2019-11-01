import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent implements OnInit {

  constructor() { }

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
