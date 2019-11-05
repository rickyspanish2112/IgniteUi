import { Component } from '@angular/core';
import { DisplayDensityToken } from 'igniteui-angular';

@Component({
  selector: 'app-party-form',
  providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: 'compact' } }],
  templateUrl: './party-form.component.html',
  styleUrls: ['./party-form.component.scss']
})

export class PartyFormComponent {
  shortCodePlaceHolder = 'Short Code';
  namePlaceHolder = 'Account Name';
  street1PlaceHolder = 'Street';
  street2PlaceHolder = 'Street1';
  cityPlaceHolder = 'City';
  countyPlaceHolder = 'County';
  postCodePlaceHolder = 'Post Code';
  countryCodePlaceHolder = 'Country';

}
