import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { IDocumentResponse } from '../models/document-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(
    private requestSvc: RequestService,
  ) { }

  /**
   * Get document info
   */
  getDocumentInfo(): Observable<IDocumentResponse> {
    return this.requestSvc.get('/test-doc-response.json');
  }
}
