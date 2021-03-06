import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { TraderRefComponent } from './header/header-controls/trader-ref-control/trader-ref.component';
import { ExpandingComponent } from './header/header-controls/expanding-header-control/expanding.component';
import { DeclarationTypeControlComponent } from './header/header-controls/declaraion-type-input-control/declaration-type-control.component';
import { BadgeControlComponent } from './header/header-controls/badge-input-control/badge-control.component';
import { AcceptanceDateComponent } from './header/header-controls/acceptance-date/acceptance-date.component';
import { DeclarationTypeComponent } from './header/declaration-type/declaration-type.component';
import { Party2Component } from './header/declaration-party2/party2.component';
import { PartyComponent } from './header/declaration-party1/party.component';
import { PartyControlComponent } from './declaration-wide-controls/expanding-controls/party-control/party-control.component';
import { PartyFormComponent } from './declaration-wide-controls/party-form/party-form.component';
import { IgniteModule } from 'src/app/shared/ignite/ignite.module';
import { AutocompletePipeStartsWith, DeclarationTypeTrimmer } from './pipes/declaration-type.pipe';
import { TransportdataComponent } from './header/transport-data/transportdata.component';
import { ValuebuildupComponent } from './header/transport-data/valuebuildup.component';
import { IgxOverlayService, IgxGridModule } from 'igniteui-angular';
import { InputComponent } from 'src/app/shared/components/controls/input/input.component';
import { TransportComponent } from './header/transport-data/transport.component';
import { GridContainerComponent } from './header/grids/grid-container.component';
import { Grid1Component } from './header/grids/grid-1/grid1.component';
import { Grid2Component } from './header/grids/grid-2/grid2.component';
import { DropdownComponent } from 'src/app/shared/components/controls/dropdown/dropdown.component';
import { GridComponent } from 'src/app/shared/components/controls/grid/grid.component';
import { ExpandingItemComponent } from './header/header-controls/expanding-item/expanding-item.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TraderRefComponent,
    ExpandingComponent,
    DeclarationTypeControlComponent,
    BadgeControlComponent,
    AcceptanceDateComponent,
    DeclarationTypeComponent,
    Party2Component,
    PartyComponent,
    PartyControlComponent,
    PartyFormComponent,
    AutocompletePipeStartsWith,
    DeclarationTypeTrimmer,
    TransportdataComponent,
    ValuebuildupComponent,
    InputComponent,
    TransportComponent,
    GridContainerComponent,
    Grid1Component,
    Grid2Component,
    DropdownComponent,
    GridComponent,
    ExpandingItemComponent
  ],
  imports: [
    SharedModule,
    IgniteModule,
  ],
  providers: [IgxOverlayService],
})
export class CdsdeclarationModule { }
