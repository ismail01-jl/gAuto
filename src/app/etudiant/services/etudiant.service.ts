// src/app/etudiants/services/etudiant.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private apiUrl = 'http://localhost:3000/etudiants';
  constructor(private http: HttpClient) {}

  getEtudiants(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getEtudiantById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${id}/`);
  }
}
