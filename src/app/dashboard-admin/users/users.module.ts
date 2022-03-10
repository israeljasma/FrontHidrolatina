import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './list/list.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    ListComponent,
    ConfirmComponent,
    CreateComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    UsersRoutingModule,
    MaterialModule
  ]
})
export class UsersModule { }
