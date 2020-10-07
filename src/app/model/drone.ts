export class Drone {
  id?: number;
  name: string;
  description: string;
  weight: string;
  flight_time: string;
  image: string;
  constructor() {
    this.name = undefined;
    this.description = undefined;
    this.weight = undefined;
    this.flight_time = undefined;
    this.image = undefined;
  }
}
