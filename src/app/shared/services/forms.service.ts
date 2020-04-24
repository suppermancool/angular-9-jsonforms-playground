import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { IForm } from '../models/form';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private requestSvc: RequestService) { }

  /**
   * Get all forms
   */
  getForms(): Observable<IForm[]> {
    return this.requestSvc.get('/forms.json');
  }

  /**
   * Get form info
   */
  getFormInfo(): Observable<IForm> {
    return this.requestSvc.get(`/form-info.json`);
  }
}
