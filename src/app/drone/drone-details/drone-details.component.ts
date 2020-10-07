import {Component, OnInit} from '@angular/core';
import {DroneService} from '../drone.service';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {Drone} from '../../model/drone';

@Component({
  selector: 'app-drone-details',
  templateUrl: './drone-details.component.html',
  styleUrls: ['./drone-details.component.scss']
})
export class DroneDetailsComponent implements OnInit {
  drone: Drone;
  constructor(private droneService: DroneService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getDrone();
  }

  getDrone() {
    this.route.paramMap.pipe(
      map(param => +param.get('id')),
      switchMap((id: number) => this.droneService.droneById(id))).subscribe(response => this.drone = response);
  }

}
