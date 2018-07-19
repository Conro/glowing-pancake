import { Service } from './../Models/service.model';
import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SERVICES } from '../data';
import {ContentMessage} from "../chat.service";

@Injectable()
export class DummyDataService {

  activeServices: Service[] = [];
  public allServices: Service[] = [];

  constructor(private http: Http) { this.allServices = this.getAllServices(); }

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

  generateContent(contentMessage: string) {
    const messageExploded : string[] = contentMessage.split(" ");
    // const allServices = this.getAllServices();

    messageExploded.forEach( ( word ) => {
      this.allServices.forEach( (service) => {
        if (service.keywords.includes(word) && !service.isUsed) {
          this.addService(service);
          service.isUsed = true;
        }
      });
    });
  }}
