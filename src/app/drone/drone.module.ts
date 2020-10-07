import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DroneComponent } from './drone.component';
import { DroneListComponent } from './drone-list/drone-list.component';
import { DroneDetailsComponent } from './drone-details/drone-details.component';
import {Route, RouterModule} from '@angular/router';
import {DroneService} from './drone.service';

const route: Route[] = [
  {
    path: '',
    component: DroneComponent,
    children: [
      {
        path: '',
        component: DroneListComponent
      },
      {
        path: ':id',
        component: DroneDetailsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [DroneComponent, DroneListComponent, DroneDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  providers: [DroneService]
})
export class DroneModule { }
