import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../.././environments/environment';

const API_URL = environment.apiURL;
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient,
  ) {}

  /**
   * Performs a request with `get` http method.
   * @param url the url
   * @param options the request options
   * @returns Observable
   */
  get(url: string, options?): Observable<any> {
    return this.http.get(API_URL + url, this.requestOptions(options)).pipe(
      catchError(err => this.catchAuthError(err)),
    );
  }

  /**
   * Request options.
   * @param method the method
   * @returns RequestOptionsArgs
   */
  private requestOptions(options) {
    let tmpOptions = options;
    if (!tmpOptions) {
      tmpOptions = {};
    }
    let headers = new HttpHeaders();
    if (!options || !options.isFile) {
      headers = headers.append('Content-Type', 'application/json');
    }
    tmpOptions.headers = headers;
    return tmpOptions;
  }

  /**
   * catches the auth error
   * @param error the error response
   */
  catchAuthError(error): Observable<Response> {
    return throwError(error);
  }
}
