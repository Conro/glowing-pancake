import { Component, OnInit } from '@angular/core';
import { Service } from '../Models/service.model';
import {DummyDataService} from "../Services/dummy-data.service";

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

  services: Service[] = [];

  constructor(private dummyDataService: DummyDataService) { }

  ngOnInit() {
    this.services = this.dummyDataService.getAllServices();
  }

  test(multiple?: number) {
    if(multiple && multiple === 1) {

      let tmpServices: Service[] = [];

      tmpServices.push(this.services[0]);
      tmpServices.push(this.services[1]);
      tmpServices.push(this.services[2]);

      this.dummyDataService.addServices(tmpServices);
    }
    else {
      let tmpService = new Service(1, 'Single Service', "test", '', ['']);
      this.dummyDataService.addService(tmpService);
    }
  }

}
