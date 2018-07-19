import { Service } from './../Models/service.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SERVICES } from '../data'
 
@Injectable()
export class DummyDataService {

  activeServices: Service[] = [];
  allServices: Service[] = [];

  constructor(private http: Http) { }

  ngOnInit() {
    this.allServices = this.getAllServices();
  }

  getAllServices(): Service[] {
    return SERVICES;
  }

  getActiveServices(): Service[] {
    return this.activeServices;
  }

  addService(service: Service) {
    this.activeServices.push(service);
    console.log(this.activeServices);
  }

  addServices(services: Service[]) {
    services.forEach(element => {
      this.activeServices.push(element);
    });
  }

  removeService(service: Service) {
    this.activeServices.forEach( (item, index) => {
      if(item.id === service.id) {
        this.activeServices.splice(index,1);
      }
    });
  }
}
