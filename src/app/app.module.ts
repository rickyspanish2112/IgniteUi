import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IgniteModule } from '../app/shared/ignite/ignite.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './components/home/home.module';
import { SharedModule } from './shared/shared.module';
import { CdsdeclarationModule } from './components/cds-declaration/cdsdeclaration.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IgniteModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule,
    HomeModule,
    SharedModule,
    CdsdeclarationModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
