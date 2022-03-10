import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAdminRoutingModule } from './dashboard-admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardAdminRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class DashboardAdminModule { }
