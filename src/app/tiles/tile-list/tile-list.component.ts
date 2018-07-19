import { DummyDataService } from './../../Services/dummy-data.service';
import { Service } from './../../Models/service.model';
import {Component, OnDestroy, OnInit} from '@angular/core';

<<<<<<< HEAD
import {CarouselModule} from 'primeng/carousel';
=======
// For MDB Angular Free
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'
>>>>>>> 81b5cc389226978d52a8f169e6bc1cce8925a1d0

@Component({
  selector: 'app-tile-list',
  templateUrl: './tile-list.component.html',
  styleUrls: ['./tile-list.component.css']
})
export class TileListComponent implements OnInit, OnDestroy {

  //services: Service[] = null;

  constructor(public dummyDataService: DummyDataService) { }

  ngOnInit() {
    /*
    this.dummyDataService.getServices()
      .subscribe(services => this.services = services);
    */

    //console.log(this.services);

    //let item1 = this.services.find(i => i.name === "Mr. Nice");
    //console.log(item1.id);
  }

  ngOnDestroy() {
    //this.services = null;
  }

  onNewProduct() {
    // this.router.navigate(['new'], {relativeTo: this.route});
  }



}
