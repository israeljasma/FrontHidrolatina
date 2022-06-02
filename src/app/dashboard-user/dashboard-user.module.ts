import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardUserRoutingModule } from './dashboard-user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './shared/navbar/navbar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    DashboardUserRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class DashboardUserModule { }
