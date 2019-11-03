import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgniteComponent } from '../core/navdrawer/ignite.component';
import { NotFoundComponent } from './error-routing/not-found.component';
import { IgniteModule } from '../shared/ignite/ignite.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    IgniteComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    IgniteModule,
    RouterModule
  ],
  exports: [IgniteComponent, NotFoundComponent]
})
export class CoreModule { }
