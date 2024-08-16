import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8081/api/tests';  // Ersetze durch deine API-URL

  constructor(private http: HttpClient) { }

  getTest(id: number): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/${id}`, { responseType: 'text' as 'json' });
  }
}