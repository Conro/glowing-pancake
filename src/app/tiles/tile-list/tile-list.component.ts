import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-tile-list',
  templateUrl: './tile-list.component.html',
  styleUrls: ['./tile-list.component.css']
})
export class TileListComponent implements OnInit, OnDestroy {

  products: Service[] = null;

  constructor() { }

  ngOnInit() {
    this.DummyDataService.initProducts;

    this.products = this.DummyDataService.getProducts();
  }

  ngOnDestroy() {
    this.products = null;
  }

  onNewProduct() {
    // this.router.navigate(['new'], {relativeTo: this.route});
  }

}
