import { Component, OnInit } from '@angular/core';
import { Service } from '../Models/service.model';
import {DummyDataService} from "../Services/dummy-data.service";

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

  allServices : Service[] = [];

  constructor(private dummyDataService: DummyDataService) { }

  ngOnInit() {

  }

  test(multiple?: number) {
    if(multiple && multiple === 1) {
      
      let tmpServices : Service[] = [];
      tmpServices.push(this.allServices[0]);
      tmpServices.push(this.allServices[1]);
      tmpServices.push(this.allServices[2]);

      this.dummyDataService.addServices(tmpServices);
    }
    else {
      let tmpService = new Service(1, 'testtt', 'lala', '', ['2']);
      this.dummyDataService.addService(tmpService);
    }
  }

}
