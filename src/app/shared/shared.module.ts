import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { InputComponent } from './components/controls/input/input.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CommonModule, FormsModule]
})
export class SharedModule { }
