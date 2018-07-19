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
  suggestedServices: Service[] = [];
  public allServices: Service[] = [];

  constructor(private http: Http) { this.allServices = this.getAllServices(); }

  getAllServices(): Service[] {
    return SERVICES;
  }

  getActiveServices(): Service[] {
    return this.activeServices;
  }
  getSuggestedServices(): Service[] {
    return this.suggestedServices;
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

  removeRequestedService(service: Service) {
    this.activeServices.forEach( (item, index) => {
      if(item.id === service.id) {
        this.allServices.forEach( (allService) => {
          if (service.id == allService.id) {
            allService.isUsed = false;
          }
          
        });
        this.activeServices.splice(index,1);
      }
    });

  }

  removeSuggestedService(service: Service) {
    this.suggestedServices.forEach( (item, index) => {
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

          this.generateSuggestedContent(service);
        }
        this.checkDuplicateContent(service);
      });
    });
  }

  generateSuggestedContent(currentService: Service) {
      currentService.suggestedIds.forEach( (id) => {
        this.suggestedServices.push(this.allServices[id-1]);
      })
  }

  checkDuplicateContent(currentService: Service) {
    this.activeServices.forEach( (activeService) => {
      this.suggestedServices.forEach( (suggestedService) => {
        if (suggestedService.id == activeService.id) {
          this.removeSuggestedService(suggestedService);
        }
      });
    });
  }


}