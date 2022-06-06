import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SensorsRoutingModule } from './sensors-routing.module';
import { DetailComponent } from './pages/detail/detail.component';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    SensorsRoutingModule
  ]
})
export class SensorsModule { }
