import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Drone} from '../../model/drone';
import {DroneService} from '../drone.service';
import {Observable} from 'rxjs';

@Injectable()
export class DroneResolver implements Resolve<Drone> {
  constructor(private droneService: DroneService) {
    // this.drone = this.route.snapshot.data.droneDetail;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Drone> {
    const id = route.paramMap.get('id');
    return this.droneService.droneById(+id);
  }
}
