import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AboutMeData } from 'interfaces';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchAboutMeService {

  readonly apiUrl = `${environment.apiBaseUrl}/api/about-me`;

  constructor(private http: HttpClient) { }

  fetchAboutMeData(): Observable<AboutMeData> {
    return this.http.get<AboutMeData>(this.apiUrl).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error fetching about me data', error);
        throw error;
      })
    );
  }
}
