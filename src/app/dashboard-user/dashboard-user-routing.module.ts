import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfileModule )
      },
      {
        path: 'ppes',
        loadChildren: () => import('./ppes/ppes.module').then( m => m.PpesModule )
      },
      {
        path: 'actions',
        loadChildren: () => import('./actions/actions.module').then( m => m.ActionsModule )
      },
      {
        path: 'sensors',
        loadChildren: () => import('./sensors/sensors.module').then( m => m.SensorsModule )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardUserRoutingModule { }
