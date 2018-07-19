import {Component, Input, OnInit} from '@angular/core';
import { Service } from './../../Models/service.model';

@Component({
  selector: 'app-tile-item',
  templateUrl: './tile-item.component.html',
  styleUrls: ['./tile-item.component.css']
})
export class TileItemComponent implements OnInit {

  @Input() service: Service;
  @Input() index: number;

  tileTitle: String = 'thisIsATest';

  constructor() { }

  ngOnInit() {
      this.tileTitle = this.service.name;
  }

}
