import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IgniteModule } from './ignite/ignite.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IgniteModule,
  ],
  exports: [CommonModule, FormsModule]
})
export class SharedModule { }
