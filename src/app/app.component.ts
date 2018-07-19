import { Service } from './Models/service.model';
import { DummyDataService } from './Services/dummy-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //services: Service[];

  constructor(
    //private dummyDataService: DummyDataService
    ) { }
 /*
  ngOnInit() {
    this.getServices();
    console.log(this.services);

    let item1 = this.services.find(i => i.name === "Mr. Nice");
    console.log(item1.id);
  }

  getServices(): void {
    this.dummyDataService.getServices()
      .subscribe(services => this.services = services)
  } */
  // test(multiple?: number) {
  //   if(multiple && multiple === 1) {
  //     var tmpServices: Service[] = [
  //       { "id": 0, "name": "swag" },
  //       { "id": 1, "name": "yeye" },
  //       { "id": 2, "name": "waddup" }
  //     ];
  //
  //     this.dummyDataService.addServices(tmpServices);
  //   }
  //   else {
  //     let tmpService = new Service(1, 'testtt');
  //     this.dummyDataService.addService(tmpService);
  //   }
  // }
}
