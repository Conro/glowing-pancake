import { Service } from './../Models/service.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SERVICES } from '../data';

@Injectable()
export class DummyDataService {
   constructor(private http: Http) {
   }
   getServices(): Observable<Service[]> {
      return of(SERVICES);
    }
}
