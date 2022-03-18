import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PpesRoutingModule } from './ppes-routing.module';
import { ListComponent } from './pages/list/list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListByUserComponent } from './pages/list-by-user/list-by-user.component';


@NgModule({
  declarations: [
    ListComponent,
    ListByUserComponent
  ],
  imports: [
    CommonModule,
    PpesRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class PpesModule { }
