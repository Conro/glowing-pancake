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

  constructor(private dummyDataService: DummyDataService) { }
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

}
