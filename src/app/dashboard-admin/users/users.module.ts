import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './list/list.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    ListComponent,
    ConfirmComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule
  ]
})
export class UsersModule { }
