import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionsRoutingModule } from './actions-routing.module';
import { ListComponent } from './list/list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListByUserComponent } from './list-by-user/list-by-user.component';


@NgModule({
  declarations: [
    ListComponent,
    ListByUserComponent
  ],
  imports: [
    CommonModule,
    ActionsRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class ActionsModule { }
