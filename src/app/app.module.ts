import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IgniteModule } from '../app/shared/ignite/ignite.module';
import { IgniteComponent } from './components/navdrawer/ignite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/cds-declaration/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/error-routing/not-found.component';
import { ExpandingComponent } from './components/cds-declaration/header/header-controls/expanding-header-control/expanding.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DeclarationTypeComponent } from './components/cds-declaration/header/declaration-type/declaration-type.component';
// tslint:disable-next-line: max-line-length
import { DeclarationTypeControlComponent } from './components/cds-declaration/header/header-controls/declaraion-type-input-control/declaration-type-control.component';

import {
  DeclarationTypeTrimmer,
  AutocompletePipeStartsWith
} from './components/cds-declaration/pipes/declaration-type.pipe';
import { BadgeControlComponent } from './components/cds-declaration/header/header-controls/badge-input-control/badge-control.component';
import { TraderRefComponent } from './components/cds-declaration/header/header-controls/trader-ref-control/trader-ref.component';
import { AcceptanceDateComponent } from './components/cds-declaration/header/header-controls/acceptance-date/acceptance-date.component';
import { PartyComponent } from './components/cds-declaration/header/declaration-party1/party.component';
// tslint:disable-next-line: max-line-length
import { PartyControlComponent } from './components/cds-declaration/declaration-wide-controls/expanding-controls/party-control/party-control.component';
import { PartyFormComponent } from './components/cds-declaration/declaration-wide-controls/party-form/party-form.component';
import { Party2Component } from './components/cds-declaration/header/declaration-party2/party2.component';

@NgModule({
  declarations: [
    AppComponent,
    IgniteComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    ExpandingComponent,
    SettingsComponent,
    DeclarationTypeComponent,
    DeclarationTypeControlComponent,
    AutocompletePipeStartsWith,
    DeclarationTypeTrimmer,
    BadgeControlComponent,
    TraderRefComponent,
    AcceptanceDateComponent,
    PartyComponent,
    PartyControlComponent,
    PartyFormComponent,
    Party2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IgniteModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
