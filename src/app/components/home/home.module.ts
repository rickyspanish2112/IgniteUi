import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IgniteModule } from 'src/app/shared/ignite/ignite.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    IgniteModule
  ]
})
export class HomeModule { }
