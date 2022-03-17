import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionsRoutingModule } from './actions-routing.module';
import { ListComponent } from './list/list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ActionsRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class ActionsModule { }
