import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { Observable } from 'rxjs';
import { ILetter } from '../models/letter';

@Injectable({
  providedIn: 'root'
})
export class LettersService {

  constructor(
    private requestSvc: RequestService,
  ) { }

  /**
   * Get all letters
   */
  getLetters(): Observable<ILetter[]> {
    return this.requestSvc.get('/letters.json');
  }

  /**
   * Get letter info
   * @param id id of letter info
   */
  getLetterInfo(id): Observable<ILetter> {
    return this.requestSvc.get(`/letters-info/letter-info-${id}.json`);
  }
}
