import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PpesRoutingModule } from './ppes-routing.module';
import { ListComponent } from './list/list.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    PpesRoutingModule,
    MaterialModule
  ]
})
export class PpesModule { }
