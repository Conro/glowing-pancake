import {Component, Input, OnInit} from '@angular/core';
import { Service } from './../../Models/service.model';
// import {NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tile-item',
  templateUrl: './tile-item.component.html',
  styleUrls: ['./tile-item.component.css']
})
export class TileItemComponent implements OnInit {

  @Input() service: Service;
  @Input() index: number;

  tileTitle: String = 'thisIsATest';

  constructor(
    // private modalService: NgbModal
  ) { }

  ngOnInit() {
      this.tileTitle = this.service.name;
  }

  // openModal(modal) {
  //     this.modalService.open(modal);
  // }

}
