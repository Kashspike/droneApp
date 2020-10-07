import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import {Route, RouterModule} from '@angular/router';


const route: Route[] = [
  {
    path: 'drone',
    loadChildren: () => import('./drone/drone.module').then(m => m.DroneModule)
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
