import { Component, OnInit } from '@angular/core';
import {DroneService} from '../drone.service';
import {Drone} from '../../model/drone';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-drone-list',
  templateUrl: './drone-list.component.html',
  styleUrls: ['./drone-list.component.scss']
})
export class DroneListComponent implements OnInit {
  drones: Drone[] = [];

  constructor(private droneService: DroneService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.droneService.droneList().subscribe(response => this.drones = response);
  }

  droneDetail(id: number) {
    this.router.navigate([id], {relativeTo: this.route});
  }

}
