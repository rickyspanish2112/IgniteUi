import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IgniteModule } from '../app/shared/ignite/ignite.module';
import { IgniteComponent } from './components/navdrawer/ignite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/cds-declaration/header/header.component';
import { DeclarationHostComponent } from './components/cds-declaration/declaration-host.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/error-routing/not-found.component';
import { ExpandingComponent } from './components/controls/expanding/expanding.component';
@NgModule({
    declarations: [
        AppComponent,
        IgniteComponent,
        HeaderComponent,
        DeclarationHostComponent,
        NotFoundComponent,
        ExpandingComponent
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
