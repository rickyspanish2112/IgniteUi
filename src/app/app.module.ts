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
import {
  DeclarationTypeControlComponent
} from './components/cds-declaration/header/header-controls/declaraion-type-input-control/declaration-type-control.component';

import {
  DeclarationTypeTrimmer,
  AutocompletePipeStartsWith
} from './components/cds-declaration/pipes/declaration-type.pipe';
import { BadgeControlComponent } from './components/cds-declaration/header/header-controls/badge-input-control/badge-control.component';
import { TraderRefComponent } from './components/cds-declaration/header/header-controls/trader-ref-control/trader-ref.component';
import { AcceptanceDateComponent } from './components/cds-declaration/header/header-controls/acceptance-date/acceptance-date.component';

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
    AcceptanceDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IgniteModule,
    BrowserAnimationsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
