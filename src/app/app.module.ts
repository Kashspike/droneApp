import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import {Route, RouterModule} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';


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
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
