import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { ILookups } from '../models/lookups';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LookupsService {

  constructor(
    private requestSvc: RequestService,
  ) { }

  /**
   * Get all lookup
   */
  getLookups(): Observable<ILookups> {
    return this.requestSvc.get('/lookups.json');
  }
}
