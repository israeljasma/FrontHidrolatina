import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { SensorsRoutingModule } from './sensors-routing.module';
import { ListComponent } from './pages/list/list.component';
import { NgChartsModule } from 'ng2-charts';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LineChartComponent } from './components/line-chart/line-chart.component';


@NgModule({
  declarations: [
    ListComponent,
    LineChartComponent
  ],
  imports: [
    CommonModule,
    SensorsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    NgChartsModule
  ],
  providers: [
    DatePipe
  ]
})
export class SensorsModule { }
