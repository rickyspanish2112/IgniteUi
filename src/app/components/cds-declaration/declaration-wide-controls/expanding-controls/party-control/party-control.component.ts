import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-party-control',
  templateUrl: './party-control.component.html',
  styleUrls: ['./party-control.component.scss']
})
export class PartyControlComponent implements OnInit {

  constructor() { }

  @Input()
  partyType: string;

  @Input()
  partyTypeDescription: string;

  ngOnInit() {
  }

}
