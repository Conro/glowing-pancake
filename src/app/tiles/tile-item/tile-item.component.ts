import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tile-item',
  templateUrl: './tile-item.component.html',
  styleUrls: ['./tile-item.component.css']
})
export class TileItemComponent implements OnInit {

  @Input() product: Service;
  @Input() index: number;

  tileTitle: String = 'thisIsATest';

  constructor() { }

  ngOnInit() {
      this.tileTitle = this.product.title;
  }

}
