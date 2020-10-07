import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';

const route: Route[] = [
  {
    path: 'drone',
    loadChildren: () => import('./drone/drone.module').then(m => m.DroneModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ]
})
export class AppRoutingModule {
}
