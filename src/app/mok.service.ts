import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MokService {
  url = 'https://6038e8684e3a9b0017e94272.mockapi.io/api/v1/authors';

  constructor(private http: HttpClient) { }
  

}
