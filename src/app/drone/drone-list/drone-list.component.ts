import { Component, OnInit } from '@angular/core';
import {DroneService} from '../drone.service';
import {Drone} from '../../model/drone';

@Component({
  selector: 'app-drone-list',
  templateUrl: './drone-list.component.html',
  styleUrls: ['./drone-list.component.scss']
})
export class DroneListComponent implements OnInit {
  drones: Drone[] = [];

  constructor(private droneService: DroneService) { }

  ngOnInit(): void {
      this.droneService.droneList().subscribe(response => this.drones = response);
  }

}
