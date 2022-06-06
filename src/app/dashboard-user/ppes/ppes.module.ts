import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PpesRoutingModule } from './ppes-routing.module';
import { DetailComponent } from './pages/detail/detail.component';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    PpesRoutingModule
  ]
})
export class PpesModule { }
