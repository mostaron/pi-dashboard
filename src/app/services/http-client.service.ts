import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs";
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) {
  }

  private handleError<T>(error: HttpErrorResponse): Observable<HttpResponse<T>> {
    console.debug(error);
    return null;
  }
  private handleComplete(): void {
    return null;
  }

  public doGet<T>(url: string, params?: HttpParams, headers?: any): Observable<HttpResponse<T>> {

    console.debug(headers);
    if(!headers){
      headers = {};
    }
    return this.httpClient.get<T>(url,
      {headers: headers,
        params: params,
        observe: 'response',
        responseType: 'json',
        reportProgress: true
      }).pipe(tap(
      data => {window.console.debug(data)},
      error => this.handleError<T>(error),
      () => this.handleComplete()
    ));
  }

}
