import { Component, OnInit } from '@angular/core';
import { Service } from '../Models/service.model';
import {DummyDataService} from "../Services/dummy-data.service";

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

  constructor(private dummyDataService: DummyDataService) { }

  ngOnInit() {
  }

  test(multiple?: number) {
    if(multiple && multiple === 1) {
      var tmpServices: Service[] = [
        { "id": 0, "name": "swag" },
        { "id": 1, "name": "yeye" },
        { "id": 2, "name": "waddup" }
      ];

      this.dummyDataService.addServices(tmpServices);
    }
    else {
      let tmpService = new Service(1, 'testtt');
      this.dummyDataService.addService(tmpService);
    }
  }

}
