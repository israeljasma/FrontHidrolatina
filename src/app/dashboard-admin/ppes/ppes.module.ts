import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PpesRoutingModule } from './ppes-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    PpesRoutingModule
  ]
})
export class PpesModule { }
