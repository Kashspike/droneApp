import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import {Route, RouterModule} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';


const route: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'drone',
    loadChildren: () => import('./drone/drone.module').then(m => m.DroneModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(route, {
      enableTracing: true
    })
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
