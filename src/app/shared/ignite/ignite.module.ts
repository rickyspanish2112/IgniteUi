import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IgxButtonModule,
  IgxIconModule,
  IgxLayoutModule,
  IgxNavigationDrawerModule,
  IgxRadioModule,
  IgxRippleModule,
  IgxSwitchModule,
  IgxToggleModule,
  IgxNavbarModule,
  IgxSelectModule,
  IgxExpansionPanelModule
} from 'igniteui-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IgxButtonModule,
    IgxIconModule,
    IgxLayoutModule,
    IgxNavigationDrawerModule,
    IgxRadioModule,
    IgxRippleModule,
    IgxSwitchModule,
    IgxToggleModule,
    IgxNavbarModule,
    IgxSelectModule,
    IgxSwitchModule,
    IgxExpansionPanelModule
  ],
  exports: [
    CommonModule,
    IgxButtonModule,
    IgxIconModule,
    IgxLayoutModule,
    IgxNavigationDrawerModule,
    IgxRadioModule,
    IgxRippleModule,
    IgxSwitchModule,
    IgxToggleModule,
    IgxNavbarModule,
    IgxSelectModule,
    IgxSwitchModule,
    IgxExpansionPanelModule
  ]
})
export class IgniteModule { }
