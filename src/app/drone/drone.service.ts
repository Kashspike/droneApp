import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Drone} from '../model/drone';

@Injectable()
export class DroneService {

  constructor(private httpClient: HttpClient) { }

  droneList(): Observable<Drone[]> {
    return this.httpClient.get('https://my-json-server.typicode.com/Kashspike/api/db').pipe(
      map((response: {drones: Drone[]}) => response.drones));
  }
}
