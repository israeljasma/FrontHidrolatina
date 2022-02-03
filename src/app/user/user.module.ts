import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { UserDetailComponent } from './user-detail/user-detail.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent
  ],
  exports: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class UserModule { }
